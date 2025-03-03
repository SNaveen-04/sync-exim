import "./contact.css";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="mx-auto md:mb-20">
      <h2 className="uppercase text-[#273296] py-5 text-4xl md:text-5xl contact !font-bold">
        CONTACT US
      </h2>

      <br />

      <div className="flex flex-wrap md:mt-16 mb-2 md:mb-0">
        {/* Contact Form - Right Side */}
        <ContactForm />

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
