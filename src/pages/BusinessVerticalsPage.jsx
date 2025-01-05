/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="w-48">
      <img src={props.img} className="h-48 w-48 rounded-md" />
      <p className="text-wrap text-sm">{props.text}</p>
    </div>
  );
};

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
  console.log(verticals);
  return (
    <div className="flex gap-3 m-5 flex-wrap justify-center">
      {verticals.map((vertical, index) => {
        return <Card img={vertical.img} text={vertical.text} key={index} />;
      })}
    </div>
  );
};

export default BusinessVerticalsPage;
