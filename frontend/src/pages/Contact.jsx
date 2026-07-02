import { useState } from "react";
import axios from "axios";
import { MapPin, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { PageWrap, Reveal, LetterReveal } from "@/components/site/motion";
import { SERVICES, ADDRESS } from "@/data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      setSent(true);
      toast.success("Thank you — we'll get back to you within 24 hours.");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageWrap testId="contact-page">
      <section className="px-6 md:px-12 lg:px-24 pt-32 md:pt-44 pb-16">
        <Reveal delay={0.1}>
          <p className="overline-label mb-6">Consultation</p>
        </Reveal>
        <LetterReveal
          text="Your dream house begins with a conversation"
          className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] max-w-5xl"
          delay={0.2}
        />
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal delay={0.3} className="lg:col-span-4">
            <p className="overline-label mb-6">Visit the studio</p>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-[#9A968F]" />
              <p data-testid="contact-address" className="text-base leading-relaxed text-[#5C5A56]">{ADDRESS}</p>
            </div>
            <div className="mt-12 pt-12 border-t border-[#DCD9D3]">
              <p className="overline-label mb-6">The founders</p>
              <p className="text-base text-[#5C5A56]">Ar. Akshay Varadai</p>
              <p className="text-base text-[#5C5A56] mt-1">Er. Ashish Varadai</p>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="lg:col-span-7 lg:col-start-6">
            {sent ? (
              <div data-testid="contact-success" className="py-20 text-center border border-[#DCD9D3]">
                <p className="font-serif-display text-4xl lg:text-5xl font-medium">Thank you.</p>
                <p className="mt-4 text-base text-[#5C5A56] max-w-md mx-auto">
                  Your inquiry has been received. We'll be in touch within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} data-testid="contact-form" className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                  <input data-testid="contact-input-name" className="line-input" placeholder="Your name *" value={form.name} onChange={set("name")} />
                  <input data-testid="contact-input-email" type="email" className="line-input" placeholder="Email address *" value={form.email} onChange={set("email")} />
                  <input data-testid="contact-input-phone" className="line-input" placeholder="Phone number" value={form.phone} onChange={set("phone")} />
                  <select
                    data-testid="contact-select-service"
                    className="line-input appearance-none cursor-pointer"
                    value={form.service}
                    onChange={set("service")}
                  >
                    <option value="">Service of interest</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  data-testid="contact-input-message"
                  className="line-input min-h-[120px] resize-y"
                  placeholder="Tell us about your project *"
                  value={form.message}
                  onChange={set("message")}
                />
                <button
                  type="submit"
                  data-testid="contact-submit"
                  disabled={sending}
                  className="group inline-flex items-center gap-3 bg-[#111111] text-[#F8F7F5] px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-colors disabled:opacity-60"
                >
                  {sending ? <Loader2 size={16} className="animate-spin" /> : null}
                  {sending ? "Sending" : "Send inquiry"}
                  {!sending && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </PageWrap>
  );
}
