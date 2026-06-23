"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// ✅ FormSubmit — zero setup, no account, no API key needed
// First submission sends a verification email to activate. After that, all
// enquiries land directly in industrialbearing.hubli@gmail.com
const FORMSUBMIT_EMAIL = "industrialbearing.hubli@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

type FormState = {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
};

type FormErrors = Partial<FormState>;

export default function ContactClient() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    product: searchParams.get("product") || "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Sync product from URL query
  useEffect(() => {
    const prod = searchParams.get("product");
    if (prod) setForm((f) => ({ ...f, product: prod }));
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Please describe your requirement";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // ── 1. Send email via FormSubmit (free, no account needed) ───────
    try {
      await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || "(not provided)",
          product: form.product || "(not specified)",
          message: form.message,
          _subject: `New Enquiry from ${form.name} — IBCC Website`,
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch {
      // Email failed silently — WhatsApp still opens
    }

    // ── 2. Open WhatsApp with pre-filled message ──────────────────────
    const text = `Hello! I'm ${form.name}.\n📞 Contact: ${form.phone}${form.email ? `\n📧 Email: ${form.email}` : ""}${form.product ? `\n🔩 Product: ${form.product}` : ""}\n📝 Requirement: ${form.message}\n\n— Sent from IBCC Website`;
    window.open(`https://wa.me/917349049883?text=${encodeURIComponent(text)}`, "_blank");

    setStatus("success");
    setForm({ name: "", phone: "", email: "", product: "", message: "" });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#072a6b] via-[#0B3D91] to-[#1a52b3] pt-12 pb-20">
        <div className="container-xl text-center">
          <p className="badge-amber mb-3">Get In Touch</p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-white/65 max-w-xl mx-auto text-lg">
            Need a product, a price quote, or technical advice? Reach out — we respond quickly.
          </p>
        </div>
      </div>

      <div className="container-xl pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── LEFT: Contact info ────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info card */}
            <div className="bg-[#0B3D91] rounded-2xl p-7 text-white">
              <h2 className="font-extrabold text-xl mb-6">Contact Information</h2>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Address</p>
                    <p className="text-white/70 text-sm mt-0.5 leading-relaxed">
                      Plot #29, Industrial Area, 2nd Gate,<br />
                      Gokul Road, Hubballi – 580030,<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Phone</p>
                    <a href="tel:+917349049883" id="contact-phone-1" className="text-white/70 text-sm block hover:text-[#F2A900] transition-colors mt-0.5">
                      7349049883 (Mobile)
                    </a>
                    <a href="tel:+919036843910" id="contact-phone-alt" className="text-white/70 text-sm block hover:text-[#F2A900] transition-colors mt-0.5">
                      9036843910 (Mobile)
                    </a>
                    <a href="tel:+918147027162" id="contact-phone-2" className="text-white/70 text-sm block hover:text-[#F2A900] transition-colors">
                      81470 27162 (Mobile)
                    </a>
                    <a href="tel:+918364507884" id="contact-landline" className="text-white/70 text-sm block hover:text-[#F2A900] transition-colors">
                      0836-4507884 (Landline)
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Email</p>
                    <a
                      href="mailto:industrialbearing.hubli@gmail.com"
                      id="contact-email"
                      className="text-white/70 text-sm hover:text-[#F2A900] transition-colors break-all mt-0.5 block"
                    >
                      industrialbearing.hubli@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Business Hours</p>
                    <p className="text-white/70 text-sm mt-0.5">
                      Monday – Saturday<br />
                      9:00 AM – 7:30 PM
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      Sunday<br />
                      10:00 AM – 2:00 PM
                    </p>
                    <p className="text-white/40 text-xs mt-1 italic">*Hours subject to confirmation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/917349049883?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 rounded-xl text-base hover:bg-[#1db954] transition-colors shadow-lg w-full"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>

            {/* Quick call */}
            <a
              href="tel:+917349049883"
              id="contact-call-direct-btn"
              className="flex items-center justify-center gap-3 btn-navy py-4 rounded-xl text-base w-full"
            >
              <PhoneIcon />
              Call 7349049883
            </a>
          </div>

          {/* ── RIGHT: Form ───────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              {status === "success" ? (
                /* Success state */
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-800 mb-2">
                    Enquiry Sent! ✅
                  </h2>
                  <p className="text-slate-500 mb-2">
                    Your message was sent via WhatsApp.
                  </p>
                  <p className="text-slate-500 mb-6 text-sm">
                    A copy was also emailed to{" "}
                    <span className="font-semibold text-[#0B3D91]">industrialbearing.hubli@gmail.com</span>
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn-navy px-6 py-3 rounded-lg"
                    >
                      Send Another Enquiry
                    </button>
                    <a
                      href="https://wa.me/917349049883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1db954] transition-colors"
                    >
                      <WhatsAppIcon />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              ) : (
                /* Form */
                /* WhatsApp UI Form */
                <div className="flex flex-col h-full bg-[#E5DDD5] rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
                      <span className="text-[#075E54] font-black text-xs">IBCC</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-tight">IBCC Support</h3>
                      <p className="text-white/70 text-[11px]">Typically replies instantly</p>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 p-4 space-y-4 bg-opacity-50 relative" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}>
                    <div className="flex justify-start">
                      <div className="bg-white text-slate-800 p-3 rounded-lg rounded-tl-none shadow max-w-[85%] text-sm relative pr-10">
                        Hello! 👋 What industrial spare or part are you looking for today? 
                        <span className="text-[10px] text-slate-400 absolute right-2 bottom-1">10:00</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-2">
                      <div className="bg-[#DCF8C6] text-slate-800 p-3 rounded-lg rounded-tr-none shadow max-w-[95%] text-sm w-full relative">
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3" id="enquiry-form">
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name *"
                            className={`bg-transparent border-b ${errors.name ? 'border-red-400' : 'border-green-300'} focus:border-green-600 outline-none text-sm py-1 placeholder:text-slate-500`}
                          />
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="WhatsApp Number *"
                            maxLength={10}
                            className={`bg-transparent border-b ${errors.phone ? 'border-red-400' : 'border-green-300'} focus:border-green-600 outline-none text-sm py-1 placeholder:text-slate-500`}
                          />
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email Address"
                            className={`bg-transparent border-b ${errors.email ? 'border-red-400' : 'border-green-300'} focus:border-green-600 outline-none text-sm py-1 placeholder:text-slate-500`}
                          />
                          <input
                            name="product"
                            value={form.product}
                            onChange={handleChange}
                            placeholder="Part/Product Needed"
                            className="bg-transparent border-b border-green-300 focus:border-green-600 outline-none text-sm py-1 placeholder:text-slate-500"
                          />
                          <textarea
                            name="message"
                            rows={2}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Additional details (brand, size, quantity)..."
                            className={`bg-transparent border-b ${errors.message ? 'border-red-400' : 'border-green-300'} focus:border-green-600 outline-none text-sm py-1 resize-none placeholder:text-slate-500`}
                          />
                          <div className="text-right mt-2 flex justify-end">
                            <button
                              type="submit"
                              disabled={status === "submitting"}
                              className="bg-[#128C7E] text-white px-5 py-2 rounded-full text-xs font-bold disabled:opacity-50 inline-flex items-center gap-2 hover:bg-[#075E54] transition-colors shadow-sm"
                            >
                              {status === "submitting" ? "Sending..." : "Send Enquiry"}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Location Section — Unique Design */}
        <div className="mt-12">
          {/* Location header card */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            {/* Top bar */}
            <div className="bg-gradient-to-r from-[#072a6b] to-[#0B3D91] px-6 py-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#F2A900] flex items-center justify-center flex-shrink-0">
                  <MapPinIcon />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-extrabold text-base leading-tight">Find Us Here</p>
                  <p className="text-white/60 text-xs truncate">
                    Plot #29, Industrial Area, Gokul Road, Hubballi
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/o3DX6i8Z5LVCr9Q9A"
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="flex items-center gap-2 bg-[#F2A900] text-[#072a6b] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#ffc200] transition-colors flex-shrink-0 shadow-lg"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Get Directions
              </a>
            </div>

            {/* Map embed — real location */}
            <div className="relative">
              <iframe
                title="Industrial Bearing & Chain Centre — Bearing and Chain Centre Hubballi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.288597405105!2d75.1118741!3d15.355334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d700615189c1%3A0xc89230c6fc9eea8c!2sIndustrial%20Bearing%20%26%20Chain%20Centre!5e0!3m2!1sen!2sin!4v1718790000000!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-2xl border border-slate-100 px-4 py-3 max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  <p className="font-extrabold text-[#0B3D91] text-sm leading-none">IBCC Hubballi</p>
                </div>
                <p className="text-slate-500 text-xs leading-snug">
                  Plot #29, Industrial Area,<br />
                  2nd Gate, Gokul Road – 580030
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[1,2,3,4].map(i => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#F2A900"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#F2A900"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span className="text-slate-500 text-[10px] ml-0.5">4.2 (5 reviews)</span>
                </div>
              </div>
            </div>

            {/* Mobile-first action strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-slate-50">
              <a
                href="https://maps.app.goo.gl/o3DX6i8Z5LVCr9Q9A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 hover:bg-slate-100 transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#0B3D91] flex items-center justify-center flex-shrink-0 group-hover:bg-[#072a6b] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-[#0B3D91] text-sm">Open in Maps</p>
                  <p className="text-slate-500 text-xs">View on Google Maps</p>
                </div>
              </a>
              <a
                href="tel:+917349049883"
                className="flex items-center gap-3 px-5 py-4 hover:bg-slate-100 transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#F2A900] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#072a6b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-[#0B3D91] text-sm">Call Now</p>
                  <p className="text-slate-500 text-xs">7349049883</p>
                </div>
              </a>
              <a
                href="https://wa.me/917349049883?text=Hello%2C%20I%20need%20directions%20to%20your%20store."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 hover:bg-slate-100 transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-[#0B3D91] text-sm">WhatsApp</p>
                  <p className="text-slate-500 text-xs">Chat for directions</p>
                </div>
              </a>
            </div>
          </div>

          {/* Landmark card — mobile-friendly */}
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🏭</span>
            <div>
              <p className="font-bold text-[#072a6b] text-sm">How to reach us</p>
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
                Located in the <strong>Industrial Estate, Gokul Road</strong>, near the 2nd Gate of the industrial area.
                Landmark: Near KSRTC Bus Stand side, Hubballi – 580030.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Icons ───────────────────────────────────────────────────────── */

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
    </svg>
  );
}
