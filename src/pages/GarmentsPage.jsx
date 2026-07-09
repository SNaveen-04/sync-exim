import { Link } from "react-router-dom";
import {
  FaCheck,
  FaLayerGroup,
  FaPencilRuler,
  FaWeightHanging,
  FaPalette,
  FaRulerCombined,
} from "react-icons/fa";

import garment1 from "../assets/garments/garment1.jpeg";
import garment2 from "../assets/garments/garment2.jpeg";

import {
  highlights,
  products,
  fabricOptions,
  customizations,
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
      <div className="container mx-auto px-4 pb-8 pt-4">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 items-center">
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
      <hr className="border-gray-200 mb-8" />
      </div>

      {/* ── Product Range ─────────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#eef1fb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-2">
            Our Product Range
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            Designed for retail, corporate wear, hospitality, education,
            industrial, promotional, and institutional applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center justify-items-center max-w-6xl mx-auto">
            {products.map((p, i) => (
              <div
                key={p.name}
                className="group bg-white border border-[#273296]/10 rounded-xl shadow-sm hover:shadow-md hover:border-[#273296]/30 transition-all duration-300 overflow-hidden flex flex-col w-full min-w-[280px] max-w-[350px]"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#273296]/10 to-transparent" />
                </div>
                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="block text-3xl font-black text-[#273296]/10 leading-none mb-2 group-hover:text-[#273296]/25 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[#273296] font-bold text-lg leading-snug mb-2">
                      {p.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specifications ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-y border-slate-200/50 mb-0">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionLabel>Specifications</SectionLabel>
          <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-8">
            Product Specifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8">
            {/* Fabric Options */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 col-span-1 xl:col-span-5">
              <h3 className="text-[#273296] font-bold text-lg mb-6 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                <FaLayerGroup className="text-xl text-[#273296]" />
                Fabric Options
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {fabricOptions.map((f) => (
                  <Bullet key={f}>{f}</Bullet>
                ))}
              </ul>
            </div>

            {/* Customization */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 col-span-1 xl:col-span-4">
              <h3 className="text-[#273296] font-bold text-lg mb-6 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                <FaPencilRuler className="text-xl text-[#273296]" />
                Customization
              </h3>
              <p className="text-[#2c526e] text-xs font-semibold mt-1 mb-5 leading-relaxed bg-[#273296]/5 rounded-lg px-3.5 py-2.5">
                Complete customization to match your brand requirements.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {customizations.map((c) => (
                  <Bullet key={c}>{c}</Bullet>
                ))}
              </ul>
            </div>

            {/* Physical Specifications */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 col-span-1 lg:col-span-2 xl:col-span-3 flex flex-col">
              <h3 className="text-[#273296] font-bold text-lg mb-6 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                <FaRulerCombined className="text-xl text-[#273296]" />
                Standards &amp; Colours
              </h3>
              
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-6 xl:gap-8 justify-center">
                {/* GSM Range */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#273296]/5 rounded-xl text-[#273296] flex-shrink-0">
                    <FaWeightHanging className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider">GSM Range</h4>
                    <p className="text-[#273296] font-extrabold text-base mt-0.5">180 - 280 GSM</p>
                    <p className="text-[#2c526e] text-xs font-medium mt-0.5 leading-normal">Customized to meet buyer requirements.</p>
                  </div>
                </div>

                {/* Colors */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#273296]/5 rounded-xl text-[#273296] flex-shrink-0">
                    <FaPalette className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Colours</h4>
                    <p className="text-[#273296] font-extrabold text-base mt-0.5">Pantone Matching</p>
                    <p className="text-[#2c526e] text-xs font-medium mt-0.5 leading-normal">Custom colours and shades available.</p>
                  </div>
                </div>

                {/* Sizes */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#273296]/5 rounded-xl text-[#273296] flex-shrink-0">
                    <FaRulerCombined className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Sizes</h4>
                    <p className="text-[#273296] font-extrabold text-base mt-0.5">XS - 5XL</p>
                    <p className="text-[#2c526e] text-xs font-medium mt-0.5 leading-normal">Custom size charts and grading.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Why Choose Us & CTA ────────────────────────────────────────────────── */}
      <ProductWhyChooseUs />
      <ProductCTA productType="garment" />
    </>
  );
};

export default GarmentsPage;
