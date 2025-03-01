import "./contact.css";

const Contact = () => {
  return (
    <div className="mx-auto">
      <h2 className="uppercase text-[#273296] py-5 text-3xl contact !font-bold">
        CONTACT US
      </h2>

      <div className="flex flex-wrap mt-8">
        {/* Contact Form - Right Side */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="bg-white p-6">
            <h3 className="text-xl font-semibold text-[#2c526e] uppercase mb-4">
              React out to us
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#2c526e] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-[#2c526e] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-[#2c526e] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-[#2c526e] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4AB9CF]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#2c526e] hover:bg-[#4AB9CF] text-white font-bold py-2 px-6 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information - Left Side */}
        <div className="w-full md:w-1/2 tracking-widest">
          <h3 className="mt-4 px-6 py-2 text-xl font-semibold text-[#2c526e] uppercase border-b border-b-[#2c526e] border-opacity-25">
            Address
          </h3>
          <div className="px-6 py-4">
            Sync Exim
            <br />
            Codissia industrial park
            <br />
            Orattukupai
            <br />
            Chettipalayam 641201
            <br />
            Coimbatore
            <br />
            Tamilnadu
          </div>
          <h3 className="mt-4 px-6 py-2 text-xl font-semibold text-[#2c526e] uppercase border-b border-b-[#2c526e] border-opacity-25">
            Phone
          </h3>
          <div className="px-6 py-4">+916380702686</div>
          <h3 className="mt-4 px-6 py-2 text-xl font-semibold text-[#2c526e] uppercase border-b border-b-[#2c526e] border-opacity-25">
            Mail
          </h3>
          <div className="px-6 py-4">synceximevercross@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
