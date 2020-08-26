import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";


/**Shows a carousel of images 
 * 
 * Accepts props : cardData[{src : "", caption: ""}, ...]
 *                : title = ""
 * 
 * Have one state to remember card Index
 * Return 2 buttons, forward and backward
 * when we click on these buttons we set the cardIndex either +1 or -1
 * Render Card based on the cardData along with index of current Card and total number of cards 
 * 
 * App -> Carousel -> Card
*/

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  function goForward() { 
    setCardIdx(cardIdx + 1);
  }
  function goBackward() { 
    setCardIdx(cardIdx - 1);
  }
  //TODO: Ask if this is a function expression

  function showLeftArrow() {
    if(cardIdx !== 0) {
      return <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={goBackward}
          data-testid="left-arrow"
        />
  } else {
    return null;
  }
}

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">

        {/* Left Arrow */}
        {showLeftArrow()}

        {/* Image */}
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />

        {/* Right Arrow */}
        {cardIdx !== total-1 &&
        <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
          data-testid="right-arrow"
        />}

      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
