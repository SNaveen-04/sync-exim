import "./contact.css";
const contact = () => {
  return (
    <div>
      <h2 className="uppercase text-[#2c526e] py-5 text-3xl Contact">
        CONTACT <span className="text-[#4AB9CF]">us</span>
      </h2>
      <div className="tracking-widest">
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
  );
};

export default contact;
