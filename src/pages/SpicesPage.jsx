import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// ── Dummy placeholder image (Unsplash spices) ─────────────────────────────────
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80";

// ── Data ──────────────────────────────────────────────────────────────────────

const highlights = [
  "Export-Grade Quality",
  "Lab Verified",
  "Worldwide Shipping",
  "Bulk Orders",
];

const whyChooseUs = [
  "Trusted Merchant Exporter",
  "Export-Quality Products",
  "Reliable Sourcing Network",
  "Competitive Pricing",
  "Flexible Order Quantities",
  "Strict Quality Inspection",
  "On-Time Delivery",
  "Professional Export Documentation",
  "Worldwide Shipping Support",
];

const spices = [
  {
    id: "black-pepper",
    name: "Black Pepper",
    hsn: "09041130",
    description:
      "We supply high-quality Black Pepper sourced from South India's leading cultivation areas and processed to meet global export standards. Our range includes MG1 FAQ and buyer-specific grades, with carefully monitored moisture levels and density specifications to deliver reliable quality for wholesale, retail, food processing, and premium spice markets worldwide.",
    quickSpecs: [
      { label: "Purity", value: "99% Min" },
      { label: "Grade", value: "500 GL to 580 GL" },
      { label: "Shelf Life", value: "12 to 18 months" },
      { label: "Origin", value: "India" },
    ],
    specTables: [
      {
        title: "Physical Specifications",
        rows: [
          ["Density", "550 to 600 g/l"],
          ["Grade", "MG1 FAQ / TGSEB / buyer-specific"],
          ["Moisture", "Max 12%"],
          ["Piperine", "3% to 6%"],
          ["Cleanliness", "Machine + hand sorted"],
          ["Packing", "25 kg & 50 kg bags or as per buyer requirement"],
        ],
      },
      {
        title: "Microbiology",
        rows: [
          ["Total Plate Count", "< 1,000,000 cfu/g"],
          ["Yeast & Mold", "< 100,000 cfu/g"],
          ["E. coli", "Absent"],
          ["Salmonella", "Absent / 25g"],
        ],
      },
    ],
    packaging: ["25 kg and 50 kg export bags", "Buyer-specific grades available"],
  },
  {
    id: "cardamom",
    name: "Cardamom",
    hsn: "090831",
    description:
      "We procure cardamom through trusted partner networks in South India, with each lot graded for size uniformity, color quality, and aroma retention. Seasonal supply planning ensures stability in export contracts and reliable fulfillment.",
    quickSpecs: [
      { label: "Purity", value: "99% Min" },
      { label: "Moisture", value: "10-12% / As per export grade" },
      { label: "Grade / Size", value: "Export Quality (7mm - 8mm+)" },
      { label: "Shelf Life", value: "6-12 months (cool, dry storage)" },
    ],
    specTables: [
      {
        title: "Physical Specifications",
        rows: [
          ["Botanical Name", "Elettaria cardamomum"],
          ["Origin", "Kerala / South India"],
          ["Color", "Natural green to light green"],
          ["Aroma", "High volatile oil profile"],
          ["Processing", "Hand sorted and graded"],
          ["Shelf Life", "12 months under cool, dry storage"],
          ["Packing", "Vacuum and bulk options"],
        ],
      },
      {
        title: "Microbiology",
        rows: [
          ["Color", "Natural green"],
          ["Aroma", "Strong and premium export quality"],
          ["Total Plate Count", "< 1,000,000 cfu/g"],
          ["Yeast & Mold", "< 100,000 cfu/g"],
          ["E. coli", "Absent"],
          ["Salmonella", "Absent / 25g"],
        ],
      },
    ],
    packaging: ["Vacuum-packed", "Bulk export bags available"],
  },
  {
    id: "cloves",
    name: "Cloves",
    hsn: "090710",
    description:
      "Recognized as a GI-tagged clove exporter from India, we source and supply hand-selected premium cloves to bulk and wholesale buyers across international markets.",
    quickSpecs: [
      { label: "Purity", value: "99% Min" },
      { label: "Moisture", value: "10-12%" },
      { label: "Grade", value: "Handpicked Premium" },
      { label: "Shelf Life", value: "12-24 Months" },
    ],
    specTables: [
      {
        title: "Physical Specifications",
        rows: [
          ["Origin", "Kerala, South India"],
          ["Shelf Life", "24 months"],
          ["Color", "Dark brown to reddish-brown"],
          ["Aroma", "Strong characteristic clove aroma"],
          ["Processing", "Hand-picked and machine-sorted"],
          ["Packing", "Vacuum and bulk options"],
        ],
      },
      {
        title: "Microbiology",
        rows: [
          ["Yeast & Mold", "≤ 10,000 CFU/g"],
          ["E. coli", "Absent"],
          ["Salmonella", "Absent in 25g"],
        ],
      },
    ],
    packaging: ["25 kg and 50 kg export bags", "Vacuum-packed on request"],
  },
  {
    id: "fennel",
    name: "Fennel",
    hsn: "09096210",
    description:
      "We source fennel seeds with emphasis on color uniformity and stable aroma profile. The seeds are then graded according to importer specifications, offering both bold and small varieties, with each batch subjected to strict quality testing for export reliability.",
    quickSpecs: [
      { label: "Purity", value: "Min 99%" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Broken Seeds", value: "Max 1%" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    specTables: [
      {
        title: "Physical Specifications",
        rows: [
          ["Botanical Name", "Foeniculum vulgare"],
          ["Origin", "Gujarat, India"],
          ["Harvest Season", "February to April"],
          ["Color", "Greenish-brown to light brown"],
          ["Variety", "Bold / Small / Singapore grade"],
          ["Processing", "Sortex cleaned and metal checked"],
        ],
      },
      {
        title: "Quality Parameters",
        rows: [
          ["Purity", "99%"],
          ["Moisture", "Max 8%"],
          ["Color", "Light green to green"],
          ["Size", "Bold / Medium"],
          ["Breakage", "Low breakage export lots"],
          ["Volatile Oil", "1.5% to 3%"],
          ["Sweetness", "High, export-preferred profile"],
        ],
      },
      {
        title: "Microbiology",
        rows: [
          ["Total Plate Count", "< 1,000,000 cfu/g"],
          ["Yeast & Mold", "< 100,000 cfu/g"],
          ["E. coli", "Absent"],
          ["Salmonella", "Absent / 25g"],
        ],
      },
    ],
    packaging: ["25 kg and 50 kg export bags", "Custom retail packs on request"],
  },
  {
    id: "cumin",
    name: "Cumin",
    hsn: "09093110",
    description:
      "Our premium Cumin is sourced from trusted mandi networks and farmer associations, followed by advanced Sortex cleaning and laboratory verification to ensure consistent aroma, optimal essential oil content, and high purity standards for international markets.",
    quickSpecs: [
      { label: "Purity", value: "98% / 99% / 99.5%" },
      { label: "Moisture", value: "Max 8% to 10%" },
      { label: "Oil Content", value: "2.5% to 4.5%" },
      { label: "Shelf Life", value: "12 to 24 months" },
    ],
    specTables: [
      {
        title: "Physical Specifications",
        rows: [
          ["Botanical Name", "Cuminum cyminum"],
          ["Origin", "Unjha, Gujarat, India"],
          ["Harvest Season", "February to April"],
          ["Color", "Brown to dark brown"],
          ["Admixture", "Max 1% to 3% by market grade"],
          ["Crop Year", "Latest available"],
        ],
      },
      {
        title: "Quality Parameters",
        rows: [
          ["Purity", "99% / 99.5% / 99.9% (Sortex)"],
          ["Moisture", "Max 8% to 10%"],
          ["Admixture", "Max 0.5% to 1%"],
          ["Foreign Matter", "Max 0.5%"],
          ["Damaged Seeds", "Max 1%"],
          ["Odor", "Strong aromatic, typical cumin"],
          ["Volatile Oil", "2.0 to 4.5 ml/100g"],
          ["Acid Insoluble Ash", "Max 1.5%"],
          ["Total Ash", "Max 9%"],
        ],
      },
      {
        title: "Microbiology",
        rows: [
          ["Total Plate Count", "< 1,000,000 cfu/g"],
          ["Yeast & Mold", "< 100,000 cfu/g"],
          ["E. coli", "Absent"],
          ["Salmonella", "Absent / 25g"],
        ],
      },
    ],
    packaging: ["25 kg and 50 kg export bags"],
  },
  {
    id: "coriander",
    name: "Coriander",
    hsn: "09092110",
    description:
      "We source premium-quality coriander seeds from trusted procurement networks across India, with emphasis on aroma retention, size uniformity, and cleanliness. Advanced cleaning, grading, and lot-wise quality verification are carried out in accordance with HACCP principles to deliver export-grade consistency and customer satisfaction.",
    quickSpecs: [
      { label: "Purity", value: "Min 98%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Splits", value: "Max 2%" },
      { label: "Shelf Life", value: "12 to 18 months" },
    ],
    specTables: [
      {
        title: "Physical Specifications",
        rows: [
          ["Botanical Name", "Coriandrum sativum"],
          ["Origin", "Gujarat / Rajasthan, India"],
          ["Harvest Season", "March to May"],
          ["Color", "Green to golden yellow"],
          ["Type", "Eagle / Parrot / Badami available"],
          ["Cleaning", "Machine + Sortex cleaned"],
        ],
      },
      {
        title: "Quality Parameters",
        rows: [
          ["Purity", "98% to 99%"],
          ["Moisture", "8% to 10%"],
          ["Split Seeds", "Max 5%"],
          ["Foreign Matter", "Max 1%"],
          ["Size", "Approx. 2 to 4 mm diameter"],
          ["Grades", "Eagle / Scooter / Parrot"],
          ["Volatile Oil", "0.2% to 1.5%"],
          ["Total Ash", "Max 6%"],
          ["Acid Insoluble Ash", "Max 1.25%"],
        ],
      },
      {
        title: "Microbiology",
        rows: [
          ["Total Plate Count", "< 1,000,000 cfu/g"],
          ["Yeast & Mold", "< 100,000 cfu/g"],
          ["E. coli", "Absent"],
          ["Salmonella", "Absent / 25g"],
        ],
      },
    ],
    packaging: ["25 kg and 50 kg export bags", "Retail packs on request"],
  },
  {
    id: "turmeric",
    name: "Turmeric",
    hsn: "09103020",
    description:
      "We source turmeric from reliable South India networks and process it to achieve export-quality standards. Both finger and powder varieties are available, with strict focus on color uniformity, moisture control, and curcumin-specific grading.",
    quickSpecs: [
      { label: "Purity", value: "99% Min" },
      { label: "Moisture", value: "< 10%" },
      { label: "Grade", value: "Single / Double Polished" },
      { label: "Shelf Life", value: "12-24 Months" },
    ],
    specTables: [
      {
        title: "Physical Specifications",
        rows: [
          ["Botanical Name", "Curcuma longa"],
          ["Origin", "Telangana / South India"],
          ["Harvest Season", "January to March"],
          ["Type", "Finger / Bulb / Powder"],
          ["Color", "Golden yellow to deep orange"],
          ["Processing", "Polished and cleaned"],
          ["Lab Test", "NABL COA available"],
        ],
      },
      {
        title: "Quality Parameters",
        rows: [
          ["Curcumin (High Grade)", "3.5% to 4%"],
          ["Curcumin (Standard Grade)", "2.5% to 3.5%"],
          ["Moisture", "Max 10%"],
          ["Formats", "Finger / Bulb / Powder"],
          ["Lead Chromate", "NIL"],
          ["GI Tagged Variety", "Available"],
        ],
      },
      {
        title: "Microbiology",
        rows: [
          ["Total Plate Count", "< 1,000,000 cfu/g"],
          ["Yeast & Mold", "< 100,000 cfu/g"],
          ["E. coli", "Absent"],
          ["Salmonella", "Absent / 25g"],
        ],
      },
    ],
    packaging: [
      "25 kg and 50 kg export bags",
      "Retail packs and powder pouches on request",
    ],
  },
  {
    id: "dry-red-chilli",
    name: "Dry Red Chilli",
    hsn: "09042110",
    description:
      "We are a leading exporter of dry red chillies from India, offering premium medium-heat varieties sourced directly from farmers, including GI-tagged Ramnad Mundu. As a reliable bulk exporter, we ensure compliance with international export standards.",
    quickSpecs: [
      { label: "Purity", value: "99% Min" },
      { label: "Moisture", value: "10-12%" },
      { label: "Grade", value: "Premium / Export" },
      { label: "Shelf Life", value: "12-24 Months" },
    ],
    specTables: [
      {
        title: "Physical Specifications",
        rows: [
          ["Botanical Name", "Capsicum annuum"],
          ["Origin", "Andhra Pradesh, India"],
          ["Harvest Season", "January to April"],
          ["Type", "Whole / Stemless / Crushed / Powder"],
          ["Moisture", "Max 10-12%"],
          ["Stemless", "Available"],
          ["Processing", "Cleaned and graded for export"],
        ],
      },
      {
        title: "Quality Parameters",
        rows: [
          ["ASTA Color", "80 to 180+"],
          ["Capsaicin", "As per required SHU range"],
          ["Aflatoxin", "Test report available"],
          ["Pungency", "SHU bands available"],
        ],
      },
      {
        title: "Available Varieties",
        rows: [
          ["S9 - Ramnad Mundu", "Medium Heat — GI Tagged, round shape"],
          ["S17 Teja", "High Heat — Slender, bright red"],
          ["Byadgi", "Low Heat — Deep red, wrinkled skin"],
          ["334 / S4 Sannam", "Medium Heat"],
        ],
      },
      {
        title: "Microbiology",
        rows: [
          ["Total Plate Count", "< 1,000,000 cfu/g"],
          ["Yeast & Mold", "< 100,000 cfu/g"],
          ["E. coli", "Absent"],
          ["Salmonella", "Absent / 25g"],
        ],
      },
    ],
    packaging: [
      "25 kg and 50 kg export bags",
      "Compressed or customized packs on request",
    ],
  },
];

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
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ zIndex: 10000 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal image banner */}
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

        {/* Modal body */}
        <div className="px-6 py-5 space-y-1">
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

        {/* Modal footer */}
        <div className="px-6 py-4 border-t border-[#273296]/10 flex justify-end">
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
        className="bg-white rounded-2xl shadow-sm border border-[#273296]/10 overflow-hidden hover:shadow-md transition-shadow duration-300"
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
        <div className="p-5">
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
        <span>View Full Specifications</span>
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
              Looking for a reliable spices export partner? Contact SYNC EXIM
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

export default SpicesPage;
