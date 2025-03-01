import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#01004b] border border-zinc-300 px-5 pt-5 pb-2 text-slate-500">
      <div className="flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="flex flex-col items-start">
          <div className="logo mb-4">
            <Link to="/sync-exim">
              <img src={Logo} className="h-12 md:h-16" alt="SyncExim Logo" />
            </Link>
          </div>

          <div className="mt-5 flex gap-6 text-lg md:text-xl !text-white">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaSkype className="cursor-pointer" />
          </div>
        </div>

        {/* Contact Information - styled like the image */}
        <div className="w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
          <h2 className="text-white text-2xl font-bold mb-4">Get In Touch</h2>

          <div className="flex flex-col gap-3 text-white">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <span>
                Sync Exim,
                <br />
                Codissia industrial park,
                <br />
                Orattukupai,
                <br />
                Chettipalayam,
                <br />
                Coimbatore, Tamilnadu - 641201
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="flex-shrink-0" />
              <span>+916380702686</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="flex-shrink-0" />
              <span>synceximevercross@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto mt-6 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 !text-white">
            <li>
              <Link to="/sync-exim" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sync-exim/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/sync-exim/verticals" className="hover:underline">
                Business Verticals
              </Link>
            </li>
            <li>
              <Link to="/sync-exim/certificates" className="hover:underline">
                Certificates
              </Link>
            </li>
            <li>
              <Link to="/sync-exim/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="font-semibold text-center text-base mt-8 !text-white">
        &copy;2024 SyncExim. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
