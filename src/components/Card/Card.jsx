/* eslint-disable react/prop-types */

import "./Card.css"
const Card = (props) => {
    console.log(props.size);
    
  return (
    <div>
        <div className="icon-container">
            <img src={props.img} height={props.size}/>
        </div>
        <h2 style={{color:props.mainColor}}>{props.main}</h2>
        <h4 style={{color:props.subColor}}>{props.sub}</h4>
        <p style={{color:props.contentColor}}>{props.content}</p>
    </div>
  )
}

export default Card