import { useState } from "react";
import emailjs from "emailjs-com";
import { BiMailSend } from "react-icons/bi";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const SERVICE_ID = "service_rc2josb";
const TEMPLATE_ID = "template_vsay9hq";
const PUBLIC_KEY = "pqjAyHGN0GTnCkoMi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "sentotalibasah27@gmail.com",
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="min-h-screen px-6 py-12 flex flex-col gap-16 items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-8">CONTACT ME</h2>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="bg-gray-900 p-4 rounded-md w-full max-w-lg shadow-lg space-y-4 flex flex-col items-center">
          <BiMailSend className="h-12 w-12 text-gray-200 mb-2" />
          <h3 className="font-semibold text-xl">Email</h3>
          <p className="text-gray-400">sentotalibasah27@gmail.com</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-md w-full max-w-lg shadow-lg space-y-4 flex flex-col items-center">
          <HiLocationMarker className="h-12 w-12 text-red-500 mb-2" />
          <h3 className="font-semibold text-xl">Address</h3>
          <p className="text-gray-400">KELAPA GADING</p>
          <p className="text-gray-400">JAKARTA UTARA</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-md w-full max-w-lg shadow-lg space-y-4 flex flex-col items-center">
          <FaGithub className="h-12 w-12 text-black mb-2" />
          <h3 className="font-semibold text-xl">GitHub</h3>
          <a
            href="https://github.com/sentotAB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-gray-400">@sentotAB</a>
        </div>

        <div className="bg-gray-900 p-4 rounded-md w-full max-w-lg shadow-lg space-y-4 flex flex-col items-center">
          <FaWhatsapp className="h-12 w-12 text-green-400 mb-2" />
          <h3 className="font-semibold text-xl">WhatsApp</h3>
          <p className="text-gray-400">0859-2058-7936</p>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-md w-full max-w-lg shadow-lg space-y-4"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-700 placeholder-gray-400"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-700 placeholder-gray-400"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 h-32 rounded bg-gray-700 placeholder-gray-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Your Message"}
        </button>

        {status && (
          <p
            className={`mt-2 text-sm ${
              status.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
