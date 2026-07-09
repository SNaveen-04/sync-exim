import { FaCheck } from "react-icons/fa";

const SectionLabel = ({ children }) => (
  <span className="inline-block uppercase text-xs font-bold tracking-widest text-[#273296] border-b-2 border-[#273296] pb-0.5 mb-3">
    {children}
  </span>
);

const DEFAULT_WHY_CHOOSE_US = [
  "Trusted Merchant Exporter",
  "Export-Quality Products",
  "Reliable Sourcing & Partner Network",
  "Competitive Pricing",
  "Flexible Order Quantities",
  "Strict Quality Inspection",
  "On-Time Delivery",
  "Professional Export Documentation",
  "Worldwide Shipping Support",
];

const ProductWhyChooseUs = ({ whyChooseUs }) => {
  const list = whyChooseUs || DEFAULT_WHY_CHOOSE_US;

  if (!list || list.length === 0) return null;

  return (
    <section className="-mx-4 px-4 py-12 mb-0 bg-[#f0f4f8]">
      <div className="container mx-auto">
        <SectionLabel>Our Advantage</SectionLabel>
        <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-8">
          Why Choose SYNC EXIM?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {list.map((reason) => (
            <div
              key={reason}
              className="bg-white rounded-lg border border-[#273296]/10 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 flex items-center gap-3"
            >
              <span className="w-7 h-7 rounded-full bg-[#273296]/10 flex items-center justify-center flex-shrink-0">
                <FaCheck className="text-[#273296] text-xs" />
              </span>
              <p className="text-[#2c526e] font-semibold text-sm">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductWhyChooseUs;
