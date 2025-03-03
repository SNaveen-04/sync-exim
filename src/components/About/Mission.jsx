import "./index.css";

const Mission = () => {
  return (
    <div className="text-zinc-700 flex max-md:flex-col md:flex-row font-sans bg-zinc-100">
      {/* OUR MISSION div as a square with reduced width */}
      <div className="bg-img md:!w-1/3 lg:!w-1/4 aspect-square flex items-center justify-center uppercase text-2xl font-semibold tracking-widest text-white">
        OUR MISSION
      </div>

      {/* Text content div with increased width */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex items-center justify-center tracking-wider px-8 py-12 text-sm md:text-lg font-normal text-center">
        To provide the finest quality products and services from India to global
        markets, ensuring sustainability, safety, and ethical sourcing. We aim
        to empower Indian communities, promote eco-friendly practices, and build
        lasting partnerships by delivering high-quality, reliable, and
        responsibly sourced solutions to meet the diverse needs of our
        international customers.
      </div>
    </div>
  );
};

export default Mission;
