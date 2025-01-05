/* eslint-disable react/prop-types */

import "./Card.css";
const Card = (props) => {
  return (
    <div className="p-5">
      <div className="icon-container">
        <span className={props.class}>
          <img
            src={props.img}
            className={`h-[${props.size}] w-[${props.size}] rounded-sm`}
          />
        </span>
      </div>
      <h2 style={{ color: props.mainColor }}>{props.main}</h2>
      <h4 style={{ color: props.subColor }}>{props.sub}</h4>
      <p style={{ color: props.contentColor }}>{props.content}</p>
    </div>
  );
};

export default Card;
