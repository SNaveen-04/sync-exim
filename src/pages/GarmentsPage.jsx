import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import garment1 from "../assets/garments/garment1.jpeg";
import garment2 from "../assets/garments/garment2.jpeg";

import {
  highlights,
  products,
  fabricOptions,
  customizations,
  coloursSizes,
} from "../data/garments.data";
import ProductWhyChooseUs from "../components/Common/ProductWhyChooseUs";
import ProductCTA from "../components/Common/ProductCTA";

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

const GarmentsPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 pb-16 pt-6">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        {/* Left — text */}
        <div>
          <h1 className="text-4xl md:text-5xl !font-bold text-[#273296] leading-tight mb-4">
            Premium Knitted
            <br />
            Garments for
            <br />
            Global Markets
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
            SYNC EXIM is a trusted exporter of premium knitted garments,
            offering customized apparel solutions through a reliable network of
            manufacturing partners in India. We supply export-quality garments
            to importers, wholesalers, distributors, retailers, corporate
            buyers, and promotional companies worldwide.
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
              src={garment1}
              alt="Garment sample 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg h-full">
            <img
              src={garment2}
              alt="Garment sample 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className="border-gray-200 mb-14" />

      {/* ── Product Range ─────────────────────────────────────────────────────── */}
      <section className="-mx-4 px-4 py-12 mb-0 bg-[#eef1fb]">
        <div className="container mx-auto">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-2">
            Our Product Range
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            Designed for retail, corporate wear, hospitality, education,
            industrial, promotional, and institutional applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((p, i) => (
              <div
                key={p}
                className="group bg-white border border-[#273296]/10 rounded-xl shadow-sm hover:shadow-md hover:border-[#273296]/30 transition-all duration-300 p-5"
              >
                <span className="block text-3xl font-black text-[#273296]/10 leading-none mb-2 group-hover:text-[#273296]/25 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[#273296] font-bold text-sm leading-snug">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specifications ────────────────────────────────────────────────────── */}
      <section className="py-12 mb-0">
        <SectionLabel>Specifications</SectionLabel>
        <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-8">
          Product Specifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fabric Options */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-[#273296] font-bold text-base mb-4 pb-2 border-b border-gray-100">
              Fabric Options
            </h3>
            <ul className="space-y-2">
              {fabricOptions.map((f) => (
                <Bullet key={f}>{f}</Bullet>
              ))}
            </ul>
          </div>

          {/* GSM + Colours */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
            <div>
              <h3 className="text-[#273296] font-bold text-base mb-4 pb-2 border-b border-gray-100">
                GSM Range
              </h3>
              <div className="bg-[#273296]/5 rounded-lg px-4 py-3 mb-3">
                <p className="text-[#273296] font-black text-xl">
                  180 - 280 GSM
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Customized to meet buyer requirements.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[#273296] font-bold text-base mb-4 pb-2 border-b border-gray-100">
                Colours &amp; Sizes
              </h3>
              <ul className="space-y-2">
                {coloursSizes.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </div>
          </div>

          {/* Customization */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-[#273296] font-bold text-base mb-1 pb-2 border-b border-gray-100">
              Customization
            </h3>
            <p className="text-[#2c526e] text-xs font-semibold mt-3 mb-3 leading-relaxed bg-[#273296]/5 rounded-lg px-3 py-2">
              Complete customization to match your brand requirements.
            </p>
            <ul className="space-y-2">
              {customizations.map((c) => (
                <Bullet key={c}>{c}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </section>

      </div>
      {/* ── Why Choose Us & CTA ────────────────────────────────────────────────── */}
      <ProductWhyChooseUs />
      <ProductCTA productType="garment" />
    </>
  );
};

export default GarmentsPage;
