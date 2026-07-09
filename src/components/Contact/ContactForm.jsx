import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { BiLoaderAlt } from "react-icons/bi";

export default function ContactForm({ withBorder = false }) {
  const initialState = {
    name: "",
    phone_number: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number: must be 7-15 digits, allowing leading +, spaces, dashes, parentheses
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
    const digitsOnly = form.phone_number.replace(/\D/g, "");
    if (!phoneRegex.test(form.phone_number) || digitsOnly.length < 7 || digitsOnly.length > 15) {
      toast.error("Please enter a valid phone number (7 to 15 digits)");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        form
      );
      if (response.status === 200) {
        toast.success("Message sent successfully");
        setForm(initialState);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Failed to submit the form";
      toast.error(errorMessage);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full md:w-1/2 ${withBorder ? "border-2 rounded-2xl" : ""}`}
    >
      <div className="bg-white p-6 rounded-2xl">
        <h3 className="text-lg font-semibold text-[#2c526e] uppercase mb-4">
          Reach out to us
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block text-[#2c526e] mb-1 text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="phone_number"
              className="block text-[#2c526e] mb-1 text-sm font-medium"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone_number"
              value={form.phone_number}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-[#2c526e] mb-1 text-sm font-medium"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="message"
              className="block text-[#2c526e] mb-1 text-sm font-medium"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="3"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-950 text-white font-medium py-1.5 px-5 text-sm rounded-md transition duration-300 relative flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <BiLoaderAlt className="animate-spin mr-2 h-4 w-4" />
                <span>Loading...</span>
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
