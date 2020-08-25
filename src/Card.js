import React from "react";
import "./Card.css";

/** Accepts props : caption, src, currNum, totalNum
 * renders Image with these details
 * Carousel -> Card -> (view)
*/
function Card(props) {
  return (
    <div className="Card">
      <h4 className="Card-title">{props.caption}</h4>
      <img className="Card-image" src={props.src} alt={props.caption} />
      <small className="Card-small">
        Image {props.currNum} of {props.totalNum}.
      </small>
    </div>
  );
}

export default Card;
