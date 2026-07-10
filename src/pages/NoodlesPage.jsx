import { Link } from "react-router-dom";
import {
  FaCheck,
  FaListUl,
  FaHourglassHalf,
  FaBoxOpen,
  FaFire,
} from "react-icons/fa";

import noodles1 from "../assets/noodles/noodles1.png";
import noodles2 from "../assets/noodles/noodles2.jpeg";
import noodles3 from "../assets/noodles/noodles3.jpeg";
import noodles4 from "../assets/noodles/noodles4.jpeg";
import noodles5 from "../assets/noodles/noodles5.jpeg";

import {
  highlights,
  products,
  packingSizes,
  noodleIngredients,
  masakaIngredients,
} from "../data/noodles.data";
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

const NoodlesPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 pb-8 pt-4">
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 items-center">
        {/* Left - text */}
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

        {/* Right - portrait images */}
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
                src={noodles4}
                alt="Noodles product 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={noodles5}
                alt="Noodles product 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className="border-gray-200 mb-8" />
      </div>

      {/* ── Product Overview ───────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#eef1fb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-2">
            Our Product
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            A perfectly crafted noodle experience - from the base to the
            seasoning - designed for retail, food service, and institutional
            markets across the globe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center justify-items-center max-w-4xl mx-auto">
            {products.map((p, i) => (
              <div
                key={p.name}
                className="group bg-white border border-[#273296]/10 rounded-xl shadow-sm hover:shadow-md hover:border-[#273296]/30 transition-all duration-300 overflow-hidden flex flex-col w-full max-w-[380px]"
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

      {/* ── Specifications ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-y border-slate-200/50 mb-0">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionLabel>Specifications</SectionLabel>
          <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-8">
            Product Specifications
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            {/* Left side: Magic Masala Ingredients (takes 8/12 width) */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 xl:col-span-8">
              <h3 className="text-[#273296] font-bold text-lg mb-4 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                <FaFire className="text-xl text-[#273296]" />
                Magic Masala Ingredients
              </h3>
              <p className="text-[#2c526e] text-xs font-semibold mt-1 mb-6 leading-relaxed bg-[#273296]/5 rounded-lg px-3.5 py-2.5">
                A rich blend of authentic spices and food-grade additives.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
                {masakaIngredients.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </div>

            {/* Right side: Noodles Ingredients + Standards & Packaging (takes 4/12 width) */}
            <div className="xl:col-span-4 flex flex-col gap-8">
              {/* Noodles Ingredients */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <h3 className="text-[#273296] font-bold text-lg mb-5 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                  <FaListUl className="text-xl text-[#273296]" />
                  Noodles Ingredients
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-x-6 gap-y-3">
                  {noodleIngredients.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>

              {/* Shelf Life + Packing */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col">
                <h3 className="text-[#273296] font-bold text-lg mb-6 pb-2 border-b border-slate-100 flex items-center gap-2.5">
                  <FaBoxOpen className="text-xl text-[#273296]" />
                  Standards &amp; Packaging
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6 justify-center">
                  {/* Shelf Life */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#273296]/5 rounded-xl text-[#273296] flex-shrink-0">
                      <FaHourglassHalf className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Shelf Life</h4>
                      <p className="text-[#273296] font-extrabold text-base mt-0.5">6 Months</p>
                      <p className="text-[#2c526e] text-xs font-medium mt-0.5 leading-normal">Under recommended storage conditions.</p>
                    </div>
                  </div>

                  {/* Packing Sizes */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#273296]/5 rounded-xl text-[#273296] flex-shrink-0">
                      <FaBoxOpen className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Packing Sizes</h4>
                      <div className="flex flex-wrap gap-1.5 mt-1.5 mb-1">
                        {packingSizes.map((size) => (
                          <span
                            key={size}
                            className="bg-[#273296] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#2c526e] text-xs font-medium mt-0.5 leading-normal">Available in retail &amp; bulk.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Why Choose Us & CTA ────────────────────────────────────────────────── */}
      <ProductWhyChooseUs />
      <ProductCTA productType="noodles" />
    </>
  );
};

export default NoodlesPage;
