import "./index.css";

const Vision = () => {
  return (
    <div className="text-zinc-700 flex max-md:flex-col md:flex-row-reverse font-sans">
      {/* OUR Vision div as a square with reduced width */}
      <div className="bg-img md:!w-1/3 lg:!w-1/4 aspect-square flex items-center justify-center uppercase text-2xl font-semibold tracking-widest text-white">
        OUR VISION
      </div>

      {/* Text content div with increased width */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex items-center justify-center tracking-wider px-8 py-12 text-sm md:text-lg font-normal text-center">
        To deliver high-quality Indian products to global markets, fostering
        sustainable international trade relationships while adhering to ethical
        business practices. We strive to ensure customer satisfaction, promote
        Indian craftsmanship, and contribute to the economic growth of both
        India and our partner nations through innovation, reliability, and
        service excellence.
      </div>
    </div>
  );
};

export default Vision;
