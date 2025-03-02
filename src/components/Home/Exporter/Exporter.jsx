import Image1 from "../../../assets/hero/SlideImg1.png";

export default function Exporter() {
  return (
    <div className="my-10 mb-20 flex justify-center">
      <div className="flex justify-center relative">
        <div
          className="border-2 border-white/30 rounded-tr-3xl w-[40%] space-y-5 p-10 bg-white/70 z-10"
          style={{ boxShadow: "1px 0px 8px 4px grey" }}
        >
          <h1 className="text-3xl font-bold text-[#01004b]">
            Exporter of Agro products and food products
          </h1>

          <p>Welcome to Sync Exim - India's Gateway to Global Markets</p>

          <p>
            At Sync Exim, we bring the finest of India's products to the world
            stage. With a commitment to quality, sustainability, and innovation,
            we specialize in exporting premium goods that reflect India's rich
            heritage and diverse culture.
          </p>

          <p>
            <span className="font-bold">Sync Exim</span> always think the
            customer is king, and we have an extremely reliable and open working
            process. Sync Exim is one of the trusted exporter and supplier in
            India, which deals with a variety of agro products and food
            products. One of the significant attractions of India is its Food.
            Indian Food is popular worldwide because of its distinctive flavor,
            scent, and lovely textures. All the products are providing as per
            the guidelines of industry standards and are safely packed as per
            the client's specifications. These products are available at
            competitive prices. Sync Exim is proud to be engaged in an ethical
            business towards international commodity trading. At Sync Exim, we
            represent Indian culture and our variety of products to the world.
          </p>

          <p>
            <span className="font-bold">Mission</span> Quality is not an
            accident, miracle or an assumed thing but it is continuous and
            sustained efforts of strong techno-managerial skill and dedication
            towards target. We are committed to ensure our strong privilege to
            fulfill the requirements of our valuable customers and strengthen
            the confidence and improve the prosperity of growers.
          </p>
        </div>

        <div
          className="absolute -bottom-10 right-20 border-2 rounded-tl-3xl w-[35%] h-fit p-2"
          style={{ boxShadow: "1px 0px 8px 4px grey" }}
        >
          <img src={Image1} alt={"Image"} className="bg-cover rounded-tl-3xl" />
        </div>
      </div>
    </div>
  );
}
