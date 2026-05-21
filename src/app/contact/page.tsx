"use client";
import { useState } from "react";

export default function Contact() {
  {
    /* useState to collect user information in contact form */
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  {
    /* useState for handling state after submit button is pressed */
  }

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  {
    /* async function to connect to resend email and push form values */
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    {
      /* we set loading to true since user hasnt submited yet */
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "applications/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await response.json();
    {
      /* user has submitted so loading is done (loading => false) */
    }
    setLoading(false);
    {
      /* if user submit is successul setSuccess => true */
    }
    if (data.success) setSuccess(true);
  }
  {
    /* form layout with tailwind for name, email, phone, and message */
  }
  return (
    <main className="max-w-x1 mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
      <p className="text-zinc-500 mb-8">
        Fill out the form and we&apos;ll get back to you!
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="(xxx)-(xxx)-(xxxx)"
            className="border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-300"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Message</label>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {success && (
            <p className="text-green-500 font-semibold text-sm">
              Message Sent! We&apos;ll get back to you soon 🍪
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            {/* while request is processing => user feedback that is is working */}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </main>
  );
}
