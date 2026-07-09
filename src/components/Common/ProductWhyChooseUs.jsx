import {
  LuHandshake,
  LuShieldCheck,
  LuNetwork,
  LuTag,
  LuBox,
  LuClipboardCheck,
  LuTruck,
  LuFileText,
  LuGlobe,
} from "react-icons/lu";

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

const getIconForReason = (reason) => {
  const lower = reason.toLowerCase();
  if (lower.includes("trust") || lower.includes("exporter") || lower.includes("merchant")) {
    return LuHandshake;
  }
  if (lower.includes("sourcing") || lower.includes("network") || lower.includes("partner")) {
    return LuNetwork;
  }
  if (lower.includes("price") || lower.includes("pricing") || lower.includes("competitive")) {
    return LuTag;
  }
  if (lower.includes("quantity") || lower.includes("quantities") || lower.includes("moq") || lower.includes("flexible")) {
    return LuBox;
  }
  if (lower.includes("inspect") || lower.includes("inspection") || lower.includes("strict")) {
    return LuClipboardCheck;
  }
  if (lower.includes("delivery") || lower.includes("time") || lower.includes("on-time")) {
    return LuTruck;
  }
  if (lower.includes("document") || lower.includes("documentation")) {
    return LuFileText;
  }
  if (lower.includes("ship") || lower.includes("shipping") || lower.includes("worldwide") || lower.includes("global")) {
    return LuGlobe;
  }
  return LuShieldCheck; // fallback
};

const ProductWhyChooseUs = ({ whyChooseUs }) => {
  const list = whyChooseUs || DEFAULT_WHY_CHOOSE_US;

  if (!list || list.length === 0) return null;

  return (
    <section className="w-full py-5 bg-[#10195a] border-t border-b border-white/10 mt-0 mb-0">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {list.map((reason) => {
            const Icon = getIconForReason(reason);
            return (
              <div
                key={reason}
                className="flex items-center gap-2.5 text-white"
              >
                <Icon className="text-lg sm:text-xl text-white/90 shrink-0 stroke-[1.8]" />
                <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white/90">
                  {reason}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductWhyChooseUs;
