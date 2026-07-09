import turmericImg from "../assets/spices/turmeric.jpeg";
import blackPepperImg from "../assets/spices/black_pepper.jpeg";
import clovesImg from "../assets/spices/cloves.jpeg";
import cardamomImg from "../assets/spices/cardamom.png";
import corianderImg from "../assets/spices/coriander.jpeg";
import cuminImg from "../assets/spices/cumin.jpg";
import dryRedChilliImg from "../assets/spices/dry_red_chilli.jpg";
import fennelImg from "../assets/spices/fennel.jpg";

export const highlights = [
  "Export-Grade Quality",
  "Lab Verified",
  "Worldwide Shipping",
  "Bulk Orders",
];

export const whyChooseUs = [
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

export const spices = [
  {
    id: "black-pepper",
    image: blackPepperImg,
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
        title: "Details",
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
    image: cardamomImg,
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
        title: "Details",
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
    image: clovesImg,
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
        title: "Details",
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
    image: fennelImg,
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
        title: "Details",
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
    image: cuminImg,
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
        title: "Details",
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
    image: corianderImg,
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
        title: "Details",
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
    image: turmericImg,
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
        title: "Details",
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
    image: dryRedChilliImg,
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
        title: "Details",
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
          ["S9 - Ramnad Mundu", "Medium Heat - GI Tagged, round shape"],
          ["S17 Teja", "High Heat - Slender, bright red"],
          ["Byadgi", "Low Heat - Deep red, wrinkled skin"],
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
