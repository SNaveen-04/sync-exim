import EdibleOils from "../assests/edibleOils.jpeg";
import Coconut from "../assests/coconut.jpeg";
import Noodles from "../assests/noodles.jpeg";
import Spices from "../assests/spices.jpeg";
import Moringha from "../assests/moringha.jpeg";
import Rice from "../assests/rice.jpeg";
import Tomato from "../assests/tomato.jpeg";
import Panchagavya from "../assests/Panchagavya.jpeg";
import CattleFeed from "../assests/cattleFeed.jpeg";
import ActivatedCarbon from "../assests/Activated carbon.jpeg";

const verticals = [
  {
    text: "Edible Oils",
    img: EdibleOils,
  },
  {
    text: "Coconut",
    img: Coconut,
  },
  {
    text: "Noodles",
    img: Noodles,
  },
  {
    text: "Spices",
    img: Spices,
  },
  {
    text: "Moringa powder and capsules",
    img: Moringha,
  },
  {
    text: "Rice",
    img: Rice,
  },
  {
    text: "Tomato ketchup",
    img: Tomato,
  },
  {
    text: "Panchagavya products",
    img: Panchagavya,
  },
  {
    text: "Cattle feed",
    img: CattleFeed,
  },
  {
    text: "Activated carbon/coconut shell charcoal",
    img: ActivatedCarbon,
  },
];

const BusinessVerticalsPage = () => {
  return (
    <div className="flex gap-6 m-5 flex-wrap justify-center">
      {verticals.map((vertical, index) => {
        return (
          <div className="w-52" key={index}>
            <img src={vertical.img} className="h-52 w-52 rounded-md" />
            <p className="text-wrap text-sm">{vertical.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BusinessVerticalsPage;
