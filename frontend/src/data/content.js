export const IMAGES = {
  hero: "https://images.pexels.com/photos/13203184/pexels-photo-13203184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
  about: "https://images.unsplash.com/photo-1707725669525-d925dc9e9010?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxpbnRlcmlvciUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBkZXRhaWxzfGVufDB8fHx8MTc4Mjk5MDU3MXww&ixlib=rb-4.1.0&q=85",
  project1: "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
  project2: "https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
  project3: "https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
  founder1: "https://images.pexels.com/photos/6615203/pexels-photo-6615203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  founder2: "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxhcmNoaXRlY3QlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3ODI5OTA1NzJ8MA&ixlib=rb-4.1.0&q=85",
};

export const SERVICES = [
  {
    slug: "planning",
    title: "Planning",
    tag: "Concept to blueprint",
    desc: "Site analysis, space programming and architectural planning that reads your plot, budget and life honestly before a single line is drawn.",
    image: IMAGES.hero,
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    tag: "Tailored to context",
    desc: "Interiors that give every room a sense of place — materials, lighting and spatial flow composed for the way you actually live.",
    image: IMAGES.project2,
  },
  {
    slug: "construction",
    title: "Construction",
    tag: "Built with precision",
    desc: "Engineering-led execution supervised on site by our founders, so the thinking in the first sketch carries through to the last detail.",
    image: IMAGES.about,
  },
  {
    slug: "3d-walkthrough",
    title: "3D Walkthrough",
    tag: "See it before it exists",
    desc: "Photorealistic 3D visualisations and walkthroughs that let you experience your future home before construction begins.",
    image: IMAGES.project3,
  },
  {
    slug: "acp-design",
    title: "ACP Design",
    tag: "Elevations that endure",
    desc: "Contemporary ACP facade and elevation design — durable, weather-resistant and unmistakably modern.",
    image: IMAGES.project1,
  },
  {
    slug: "turnkey-project",
    title: "Turnkey Project",
    tag: "One handshake, one handover",
    desc: "From the first consultation to the final key — design, approvals, construction and interiors delivered as one seamless engagement.",
    image: IMAGES.project2,
  },
];

export const PROJECTS = [
  {
    slug: "varadai-residence",
    title: "Varadai Residence",
    location: "Vivekanand Nagar, Gokak",
    year: "2025",
    desc: "A 3,200 sq.ft family residence composed around a central courtyard, completed with full turnkey interiors.",
    image: IMAGES.project1,
  },
  {
    slug: "lakeview-villa",
    title: "Lakeview Villa",
    location: "Ghataprabha, Belagavi",
    year: "2024",
    desc: "A weekend villa opening onto the backwaters — deep verandahs, exposed concrete and warm teak throughout.",
    image: IMAGES.hero,
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    location: "Gokak Falls Road, Gokak",
    year: "2024",
    desc: "A minimalist interior renovation that brings soft northern light into every room of a 1990s home.",
    image: IMAGES.project2,
  },
  {
    slug: "belagavi-penthouse",
    title: "Belagavi Penthouse",
    location: "Tilakwadi, Belagavi",
    year: "2023",
    desc: "A duplex penthouse interior — calm neutral palette, sculptural staircase and a full 3D-walkthrough-led design process.",
    image: IMAGES.project3,
  },
];

export const STATS = [
  { value: "120+", label: "Projects delivered" },
  { value: "6+", label: "Years in practice" },
  { value: "98%", label: "Client satisfaction" },
  { value: "6", label: "Integrated services" },
];

export const TESTIMONIALS = [
  {
    name: "Prakash Kulkarni",
    role: "Homeowner, Gokak",
    quote: "From planning to the final interior styling, the entire process felt thoughtful and seamless. The house they created exceeded everything we imagined.",
  },
  {
    name: "Sneha Patil",
    role: "Villa Owner, Belagavi",
    quote: "The 3D walkthrough let us live in our home before it was built. Every material, every corner felt intentional and beautifully composed.",
  },
  {
    name: "Ramesh Hiremath",
    role: "Turnkey Client",
    quote: "One team handled design, construction and interiors. We handed over a plot and received a home — calm, refined and made to last.",
  },
];

export const FOUNDERS = [
  {
    name: "Ar. Akshay Varadai",
    role: "Founder & Principal Architect",
    image: IMAGES.founder1,
    bio: "Akshay leads every project from brief to handover — reading the site honestly, asking the right questions, and shaping spaces that feel timeless and deeply personal.",
  },
  {
    name: "Er. Ashish Varadai",
    role: "Founder & Head of Construction",
    image: IMAGES.founder2,
    bio: "Ashish brings engineering rigour to the studio — translating drawings into precise, durable construction and supervising every site personally.",
  },
];

export const ADDRESS = "Varadai Complex, Vivekanand Nagar A1 Cross, Gokak — 591307";
