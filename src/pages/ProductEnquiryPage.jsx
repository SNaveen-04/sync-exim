import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { BiLoaderAlt } from "react-icons/bi";

export default function ProductEnquiryPage() {
  const initialState = {
    productName: "",
    qtyRequired: "",
    shipmentType: "",
    qtyType: "KGS",
    email: "",
    companyName: "",
    query: "",
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
      // const response = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/send-product-enquiry`,
      //   form
      // );
      // if (response.status === 200) {
      //   toast.success("Form Data Sent Successfully");
      //   setForm(initialState);
      // }

      console.log(form);
    } catch (err) {
      toast.error("Form Data Not Sent");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 pb-10 pt-5 ">
      <h2 className="uppercase text-[#273296] py-5 text-4xl md:text-5xl text-center !font-bold">
        Product Enquiry
      </h2>

      <div className="flex justify-center">
        <div className="w-3/4 border-2 rounded-2xl">
          <div className="bg-white p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-[#2c526e] uppercase mb-4">
              Send Product Enquiry
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="productName"
                  className="block text-[#2c526e] mb-1 text-sm"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  value={form.productName}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="qtyRequired"
                  className="block text-[#2c526e] mb-1 text-sm"
                >
                  Quantity Required
                </label>
                <input
                  type="number"
                  name="qtyRequired"
                  value={form.qtyRequired}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="shipmentType"
                  className="block text-[#2c526e] mb-1 text-sm"
                >
                  Shipment Type
                </label>
                <select
                  name="shipmentType"
                  value={form.shipmentType}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="20'' DV">20'' DV</option>
                  <option value="40'' HQ">40'' HQ</option>
                  <option value="40'' RF">40'' RF</option>
                  <option value="Break Bulk">Break Bulk</option>
                  <option value="Bulk">Bulk</option>
                </select>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="quantityIn"
                  className="block text-[#2c526e] mb-1 text-sm"
                >
                  Quantity in
                </label>

                <div className="flex items-center gap-5">
                  <div>
                    <input
                      type="radio"
                      name="quantityIn"
                      value="KGS"
                      onChange={handleChange}
                      checked={form.qtyType === "KGS"}
                      className="mr-2 focus:ring-2 focus:ring-[#4AB9CF]"
                      required
                    />
                    <label htmlFor="KGS" className="text-sm text-[#2c526e]">
                      KGS
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="quantityIn"
                      value="MTS"
                      onChange={handleChange}
                      checked={form.qtyType === "MTS"}
                      className="mr-2 focus:ring-2 focus:ring-[#4AB9CF]"
                    />
                    <label htmlFor="MTS" className="text-sm text-[#2c526e]">
                      MTS
                    </label>
                  </div>
                </div>
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
                  htmlFor="companyName"
                  className="block text-[#2c526e] mb-1 text-sm"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="query"
                  className="block text-[#2c526e] mb-1 text-sm"
                >
                  Query
                </label>
                <textarea
                  rows="3"
                  name="query"
                  value={form.query}
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
      </div>
    </div>
  );
}
