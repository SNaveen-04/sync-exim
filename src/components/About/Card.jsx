/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="w-64 text-center">
      <img
        src={props.Image}
        className="w-44 h-44 mx-auto md:w-64 md:h-64 rounded-sm"
      />
      <h3 className="py-2 text-lg font-semibold text-[#2c526e] uppercase md:h-20">
        {props.title}
      </h3>
      <p className="text-base tracking-wide text-[#545454]">
        {props.description}
      </p>
    </div>
  );
};
export default Card;
