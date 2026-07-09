import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProductCTA = ({ productType, description }) => {
  const finalDescription =
    description ||
    (productType
      ? `Looking for a reliable ${productType.toLowerCase()} export partner? Contact SYNC EXIM today for customized solutions, competitive pricing, and timely delivery for your bulk export requirements.`
      : `Looking for a reliable export partner? Contact SYNC EXIM today for customized solutions, competitive pricing, and timely delivery for your bulk export requirements.`);

  return (
    <section className="w-full py-12 bg-[#0a1148] mt-0">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between gap-8">
        <div className="mb-6 md:mb-0">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
            Get Started
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Request a Quote
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed max-w-lg">
            {finalDescription}
          </p>
        </div>
        <Link
          to="/product-enquiry"
          className="inline-block flex-shrink-0 bg-white text-[#273296] font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-sm"
        >
          <span className="flex items-center gap-2">
            Contact Us Today <FaArrowRight className="text-xs" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProductCTA;
