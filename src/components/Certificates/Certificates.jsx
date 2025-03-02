import Image1 from "../../assets/certificates/certificate_of_iec.jpg";
import Image2 from "../../assets/certificates/print_udyam_registration_certificate.jpg";

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="uppercase text-[#273296] py-5 text-4xl text-center !font-bold">
        Certificates
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-center">
        {/* Certificate 1 */}
        <div className="w-full md:w-1/2 max-w-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">
            IEC Certificate
          </h2>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={Image1}
              alt="IEC Certificate"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="w-full md:w-1/2 max-w-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Udyam Registration Certificate
          </h2>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={Image2}
              alt="Udyam Registration Certificate"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
