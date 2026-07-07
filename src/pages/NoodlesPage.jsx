import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight } from "react-icons/fa";

import noodles1 from "../assets/noodles/noodles1.png";
import noodles2 from "../assets/noodles/noodles2.jpeg";
import noodles3 from "../assets/noodles/noodles3.jpeg";

// ── Data ──────────────────────────────────────────────────────────────────────

const packingSizes = ["180g", "450g", "900g", "1 kg"];

const noodleIngredients = [
  "Refined Wheat Flour",
  "Permitted Preservatives",
];

const masakaIngredients = [
  "Hydrolysed Groundnut Protein",
  "Mixed Spices — Onion Powder",
  "Chilli Powder",
  "Garlic Powder",
  "Coriander",
  "Turmeric",
  "Cumin",
  "Aniseed",
  "Black Pepper",
  "Fenugreek",
  "Ginger",
  "Clove",
  "Nutmeg",
  "Cardamom",
  "Noodles Powder",
  "Wheat Flour",
  "Edible Vegetable Oil",
  "Salt",
  "Wheat Gluten",
  "Mineral & Sugar",
  "Edible Starch",
  "Rock Salt",
  "Acidifying Agent",
  "Mineral Flavour Enhancer",
  "Colour & Raising Agent",
];

const highlights = [
  "Premium Quality",
  "Multiple Pack Sizes",
  "6-Month Shelf Life",
  "Worldwide Export",
];

const whyChooseUs = [
  "Trusted Merchant Exporter",
  "Export-Quality Products",
  "Reliable Manufacturing Partner Network",
  "Competitive Pricing",
  "Flexible Order Quantities",
  "Strict Quality Inspection",
  "On-Time Delivery",
  "Professional Export Documentation",
  "Worldwide Shipping Support",
];

// ── Sub-components ─────────────────────────────────────────────────────────────

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2.5 text-[#2c526e] text-sm leading-relaxed">
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#273296] flex-shrink-0" />
    {children}
  </li>
);

const SectionLabel = ({ children }) => (
  <span className="inline-block uppercase text-xs font-bold tracking-widest text-[#273296] border-b-2 border-[#273296] pb-0.5 mb-3">
    {children}
  </span>
);

// ── Page ──────────────────────────────────────────────────────────────────────

const NoodlesPage = () => {
  return (
    <div className="container mx-auto px-4 pb-16 pt-6">
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        {/* Left — text */}
        <div>
          <h1 className="text-4xl md:text-5xl !font-bold text-[#273296] leading-tight mb-4">
            Premium Quality
            <br />
            Noodles for
            <br />
            Global Markets
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
            SYNC EXIM is a trusted exporter of premium quality noodles,
            offering a rich blend of refined wheat flour noodles paired with an
            authentic Magic Masala seasoning. We supply export-quality noodles
            to importers, wholesalers, distributors, retailers, and food
            companies worldwide.
          </p>

          {/* Highlight badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {highlights.map((h) => (
              <span
                key={h}
                className="flex items-center gap-1.5 bg-[#273296] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full"
              >
                <FaCheck className="text-[10px]" />
                {h}
              </span>
            ))}
          </div>

          <Link
            to="/product-enquiry"
            className="inline-block bg-[#273296] text-white font-bold px-7 py-2.5 rounded-lg hover:bg-[#1e2578] transition-colors duration-300 text-sm"
          >
            Request a Quote
          </Link>
        </div>

        {/* Right — portrait images */}
        <div className="flex gap-4" style={{ height: "480px" }}>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg h-full">
            <img
              src={noodles1}
              alt="Noodles product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={noodles2}
                alt="Noodles product 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={noodles3}
                alt="Noodles product 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className="border-gray-200 mb-14" />

      {/* ── Product Overview ───────────────────────────────────────────────────── */}
      <section className="-mx-4 px-4 py-12 mb-0 bg-[#eef1fb]">
        <div className="container mx-auto">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-2">
            Our Product
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            A perfectly crafted noodle experience — from the base to the
            seasoning — designed for retail, food service, and institutional
            markets across the globe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Noodles Card */}
            <div className="group bg-white border border-[#273296]/10 rounded-xl shadow-sm hover:shadow-md hover:border-[#273296]/30 transition-all duration-300 p-5">
              <span className="block text-3xl font-black text-[#273296]/10 leading-none mb-2 group-hover:text-[#273296]/25 transition-colors">
                01
              </span>
              <p className="text-[#273296] font-bold text-base leading-snug mb-1">
                Noodles
              </p>
              <p className="text-gray-500 text-xs">
                Refined Wheat Flour &amp; Permitted Preservatives
              </p>
            </div>

            {/* Magic Masala Card */}
            <div className="group bg-white border border-[#273296]/10 rounded-xl shadow-sm hover:shadow-md hover:border-[#273296]/30 transition-all duration-300 p-5">
              <span className="block text-3xl font-black text-[#273296]/10 leading-none mb-2 group-hover:text-[#273296]/25 transition-colors">
                02
              </span>
              <p className="text-[#273296] font-bold text-base leading-snug mb-1">
                Magic Masala
              </p>
              <p className="text-gray-500 text-xs">
                Authentic spice blend with hydrolysed groundnut protein,
                wheat flour, edible oil, and a rich assortment of premium
                spices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specifications ─────────────────────────────────────────────────────── */}
      <section className="py-12 mb-0">
        <SectionLabel>Specifications</SectionLabel>
        <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-8">
          Product Specifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Noodle Ingredients */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-[#273296] font-bold text-base mb-4 pb-2 border-b border-gray-100">
              Noodles Ingredients
            </h3>
            <ul className="space-y-2">
              {noodleIngredients.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>

          {/* Shelf Life + Packing */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
            <div>
              <h3 className="text-[#273296] font-bold text-base mb-4 pb-2 border-b border-gray-100">
                Shelf Life
              </h3>
              <div className="bg-[#273296]/5 rounded-lg px-4 py-3">
                <p className="text-[#273296] font-black text-xl">6 Months</p>
                <p className="text-gray-500 text-xs mt-0.5">
                  From date of manufacture under recommended storage conditions.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[#273296] font-bold text-base mb-4 pb-2 border-b border-gray-100">
                Packing Sizes
              </h3>
              <div className="flex flex-wrap gap-2">
                {packingSizes.map((size) => (
                  <span
                    key={size}
                    className="bg-[#273296]/10 text-[#273296] font-bold text-sm px-3 py-1 rounded-lg"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Magic Masala Ingredients */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-[#273296] font-bold text-base mb-1 pb-2 border-b border-gray-100">
              Magic Masala Ingredients
            </h3>
            <p className="text-[#2c526e] text-xs font-semibold mt-3 mb-3 leading-relaxed bg-[#273296]/5 rounded-lg px-3 py-2">
              A rich blend of authentic spices and food-grade additives.
            </p>
            <ul className="space-y-2">
              {masakaIngredients.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────────────────── */}
      <section className="-mx-4 px-4 py-12 mb-0 bg-[#f0f4f8]">
        <div className="container mx-auto">
          <SectionLabel>Our Advantage</SectionLabel>
          <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-8">
            Why Choose SYNC EXIM?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whyChooseUs.map((reason) => (
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

      {/* ── CTA ────────────────────────────────────────────────────────────────── */}
      <section className="-mx-4 px-4 py-12 bg-[#273296]">
        <div className="container mx-auto md:flex md:items-center md:justify-between gap-8">
          <div className="mb-6 md:mb-0">
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
              Get Started
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Request a Quote
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed max-w-lg">
              Looking for a reliable noodles export partner? Contact SYNC EXIM
              today for customized solutions, competitive pricing, and timely
              delivery for your bulk export requirements.
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
    </div>
  );
};

export default NoodlesPage;
