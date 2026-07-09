import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

import { highlights, spices } from "../data/spices.data";
import ProductWhyChooseUs from "../components/Common/ProductWhyChooseUs";
import ProductCTA from "../components/Common/ProductCTA";

// ── Dummy placeholder image (Unsplash spices) ─────────────────────────────────
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80";

// ── Sub-components ─────────────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <span className="inline-block uppercase text-xs font-bold tracking-widest text-[#273296] border-b-2 border-[#273296] pb-0.5 mb-3">
    {children}
  </span>
);

const SpecTable = ({ title, rows }) => (
  <div className="mb-4">
    <h4 className="text-[#273296] font-bold text-xs uppercase tracking-wider mb-2">
      {title}
    </h4>
    <div className="rounded-lg overflow-hidden border border-[#273296]/10">
      <table className="w-full text-xs">
        <tbody>
          {rows.map(([key, val], i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : "bg-[#f5f7ff]"}
            >
              <td className="px-3 py-2 font-semibold text-[#273296] w-2/5 border-r border-[#273296]/5">
                {key}
              </td>
              <td className="px-3 py-2 text-gray-600">{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ── Modal ─────────────────────────────────────────────────────────────────────

const SpiceModal = ({ spice, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative flex flex-col bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh]"
        style={{ zIndex: 10000 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal image banner — sticky top */}
        <div className="relative h-52 overflow-hidden rounded-t-2xl flex-shrink-0">
          <img
            src={PLACEHOLDER}
            alt={spice.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#273296]/80 via-[#273296]/20 to-transparent" />
          {/* Close button — top right */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all duration-200"
          >
            <FaTimes className="text-xs" />
          </button>
          {/* Title — bottom left */}
          <div className="absolute bottom-0 left-0 p-5">
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
              HSN {spice.hsn}
            </span>
            <h3 className="text-white text-2xl font-black leading-tight">
              {spice.name}
            </h3>
          </div>
        </div>

        {/* Modal body — scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-1">
          {spice.specTables.map((t) => (
            <SpecTable key={t.title} title={t.title} rows={t.rows} />
          ))}

          {/* Packaging */}
          <div className="pt-2">
            <h4 className="text-[#273296] font-bold text-xs uppercase tracking-wider mb-2">
              Packaging Options
            </h4>
            <ul className="space-y-1">
              {spice.packaging.map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-600 text-xs">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#273296] flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal footer — sticky bottom */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-[#273296]/10 flex justify-end bg-white rounded-b-2xl">
          <Link
            to="/product-enquiry"
            className="inline-flex items-center gap-2 bg-[#273296] text-white font-bold px-5 py-2 rounded-lg hover:bg-[#1e2578] transition-colors duration-200 text-xs"
          >
            Request a Quote <FaArrowRight className="text-[10px]" />
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ── Card ──────────────────────────────────────────────────────────────────────

const SpiceCard = ({ spice }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        id={spice.id}
        className="flex flex-col bg-white rounded-2xl shadow-sm border border-[#273296]/10 overflow-hidden hover:shadow-md transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={PLACEHOLDER}
            alt={spice.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#273296]/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
              HSN {spice.hsn}
            </span>
            <h3 className="text-white text-xl font-black leading-tight">
              {spice.name}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex-1">
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {spice.description}
          </p>

          {/* Quick spec pills */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {spice.quickSpecs.map(({ label, value }) => (
              <div key={label} className="bg-[#273296]/5 rounded-lg px-3 py-2">
                <p className="text-[#273296]/60 text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">
                  {label}
                </p>
                <p className="text-[#273296] font-black text-xs leading-snug">
                  {value}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Full-width CTA button */}
      <button
        onClick={() => setModalOpen(true)}
        className="w-full flex items-center justify-center gap-2 bg-[#273296]/5 hover:bg-[#273296] text-[#273296] hover:text-white font-bold text-xs uppercase tracking-wider py-3.5 border-t border-[#273296]/10 transition-all duration-200 group"
      >
        <span>View Full Details</span>
        <FaExternalLinkAlt className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
      </button>
      </div>

      {modalOpen && (
        <SpiceModal spice={spice} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────

const SpicesPage = () => {
  return (
    <div className="container mx-auto px-4 pb-16 pt-6">
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        {/* Left — text */}
        <div>
          <h1 className="text-4xl md:text-5xl !font-bold text-[#273296] leading-tight mb-4">
            Premium Indian
            <br />
            Spices for
            <br />
            Global Markets
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
            SYNC EXIM is a trusted exporter of premium Indian spices, sourcing
            from India's finest cultivation regions and supplying export-grade
            quality to importers, wholesalers, distributors, food processors,
            and retailers worldwide.
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

        {/* Right — hero image */}
        <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: "480px" }}>
          <img
            src={PLACEHOLDER}
            alt="Indian spices assortment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className="border-gray-200 mb-14" />


      {/* ── Spice Cards ───────────────────────────────────────────────────────── */}
      <section className="py-14">
        <SectionLabel>Export Catalogue</SectionLabel>
        <h2 className="text-2xl md:text-3xl !font-bold text-[#273296] mb-8">
          Our Spice Catalogue
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {spices.map((spice) => (
            <SpiceCard key={spice.id} spice={spice} />
          ))}
        </div>
      </section>

      {/* ── Why Choose Us & CTA ────────────────────────────────────────────────── */}
      <ProductWhyChooseUs />
      <ProductCTA productType="spices" />
    </div>
  );
};

export default SpicesPage;
