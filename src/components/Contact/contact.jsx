import "./contact.css";
const contact = () => {
  return (
    <div>
      <div className="Contact">Contact Us</div>
      <div className="tracking-widest">
        <h3 className="text-xl font-semibold border-b shadow-white p-4 px-8 uppercase">
          Address
        </h3>
        <div className="p-6">
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
        <h3 className="text-xl font-semibold border-b shadow-white p-4 px-8 uppercase">
          Phone
        </h3>
        <div className="p-6">+916380702686</div>
        <h3 className="text-xl font-semibold border-b shadow-white p-4 px-8 uppercase">
          Mail
        </h3>
        <div className="p-6">synceximevercross@gmail.com</div>
      </div>
    </div>
  );
};

export default contact;
