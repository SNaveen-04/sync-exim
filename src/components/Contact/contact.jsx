import "./contact.css";

const Contact = () => {
  return (
    <div className="mx-auto md:mb-20">
      <h2 className="uppercase text-[#273296] py-5 text-3xl contact !font-bold">
        CONTACT US
      </h2>

      <br />

      <div className="flex flex-wrap md:mt-16 mb-2 md:mb-0">
        {/* Contact Form - Right Side */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6">
            <h3 className="text-lg font-semibold text-[#2c526e] uppercase mb-4">
              React out to us
            </h3>
            <form>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block text-[#2c526e] mb-1 text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  type="tel"
                  id="phone"
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
                  id="email"
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
                  id="message"
                  rows="3"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-950 text-white font-medium py-1.5 px-5 text-sm rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information - Left Side */}
        <div className="w-full md:w-1/2 tracking-widest bg-[#01004b] md:rounded-l-xl">
          <h3 className="mt-4 px-6 py-2 text-lg font-semibold text-white uppercase border-b border-b-white border-opacity-25 m-5">
            Address
          </h3>
          <div className="px-6 py-4 text-white text-sm m-5">
            Sync Exim,
            <br />
            Codissia industrial park,
            <br />
            Orattukupai,
            <br />
            Chettipalayam,
            <br />
            Coimbatore, Tamilnadu - <span className="!font-sans">641201</span>
          </div>

          <h3 className="mt-4 px-6 py-2 text-lg font-semibold text-white uppercase border-b border-b-white border-opacity-25 m-5">
            Phone
          </h3>
          <div className="px-6 py-4 text-white text-sm m-5 !font-sans">
            +91 638 070 2686
          </div>
          <h3 className="mt-4 px-6 py-2 text-lg font-semibold text-white uppercase border-b border-b-white border-opacity-25 m-5">
            Mail
          </h3>
          <div className="px-6 py-4 text-white text-sm m-5">
            synceximevercross@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
