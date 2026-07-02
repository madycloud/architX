"""Backend API tests for ArchtiX - Inquiries endpoints."""
import os
import time
import uuid
import pytest
import requests
from datetime import datetime

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://varadai-architects.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


# Root endpoint smoke test
class TestRoot:
    def test_root(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        assert "message" in r.json()


# POST /api/inquiries tests
class TestCreateInquiry:
    def test_create_inquiry_full_payload(self, api_client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"{unique} Full",
            "email": f"{unique}@example.com",
            "phone": "+91 9876543210",
            "service": "Architecture",
            "message": "Interested in your services. Please contact."
        }
        r = api_client.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 200, f"Got {r.status_code}: {r.text}"
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["service"] == payload["service"]
        assert data["message"] == payload["message"]
        # created_at parseable
        datetime.fromisoformat(data["created_at"].replace("Z", "+00:00"))

    def test_create_inquiry_minimal(self, api_client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"{unique} Minimal",
            "email": f"{unique}@example.com",
            "message": "Minimal inquiry."
        }
        r = api_client.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["phone"] is None
        assert data["service"] is None

    def test_create_inquiry_invalid_email_returns_422(self, api_client):
        payload = {
            "name": "TEST invalid",
            "email": "not-an-email",
            "message": "should fail"
        }
        r = api_client.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 422, f"Expected 422, got {r.status_code}: {r.text}"

    def test_create_inquiry_missing_required_fields(self, api_client):
        # missing message
        r = api_client.post(f"{API}/inquiries", json={"name": "x", "email": "x@x.com"})
        assert r.status_code == 422
        # missing name
        r = api_client.post(f"{API}/inquiries", json={"email": "x@x.com", "message": "hi"})
        assert r.status_code == 422
        # missing email
        r = api_client.post(f"{API}/inquiries", json={"name": "x", "message": "hi"})
        assert r.status_code == 422


# GET /api/inquiries tests
class TestListInquiries:
    def test_list_returns_array_and_sorted_desc(self, api_client):
        # Create two inquiries with small delay
        u1 = f"TEST_{uuid.uuid4().hex[:8]}"
        r1 = api_client.post(f"{API}/inquiries", json={
            "name": f"{u1}_first", "email": f"{u1}@ex.com", "message": "first"
        })
        assert r1.status_code == 200
        id1 = r1.json()["id"]

        time.sleep(1.1)

        u2 = f"TEST_{uuid.uuid4().hex[:8]}"
        r2 = api_client.post(f"{API}/inquiries", json={
            "name": f"{u2}_second", "email": f"{u2}@ex.com", "message": "second"
        })
        assert r2.status_code == 200
        id2 = r2.json()["id"]

        # GET
        gr = api_client.get(f"{API}/inquiries")
        assert gr.status_code == 200
        items = gr.json()
        assert isinstance(items, list)
        assert len(items) >= 2

        ids = [it["id"] for it in items]
        assert id1 in ids and id2 in ids

        # Newest first: id2 should come before id1
        pos1 = ids.index(id1)
        pos2 = ids.index(id2)
        assert pos2 < pos1, "Inquiries not sorted newest first"

        # Verify created_at descending
        first_ts = datetime.fromisoformat(items[0]["created_at"].replace("Z", "+00:00"))
        last_ts = datetime.fromisoformat(items[-1]["created_at"].replace("Z", "+00:00"))
        assert first_ts >= last_ts

        # No _id from mongo should leak
        for it in items[:5]:
            assert "_id" not in it
