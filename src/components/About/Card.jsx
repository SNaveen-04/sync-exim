/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="w-64 text-center">
      <img src={props.Image} className="w-64 h-64 rounded-sm" />
      <h3 className="py-2 text-[#2c526e]">{props.title}</h3>
      <p className="text-sm tracking-wide text-[#545454]">
        {props.description}
      </p>
    </div>
  );
};
export default Card;
