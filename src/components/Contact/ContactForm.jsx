import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { BiLoaderAlt } from "react-icons/bi";

export default function ContactForm() {
  const initialState = {
    name: "",
    contact: "",
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

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-email`,
        form
      );
      if (response.status === 200) {
        toast.success("Message Sent");
        setForm(initialState);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <div className="bg-white p-6">
        <h3 className="text-lg font-semibold text-[#2c526e] uppercase mb-4">
          React out to us
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block text-[#2c526e] mb-1 text-sm">
              Name
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
              htmlFor="phone"
              className="block text-[#2c526e] mb-1 text-sm"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-[#2c526e] mb-1 text-sm"
            >
              Email
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
              className="block text-[#2c526e] mb-1 text-sm"
            >
              Message
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
