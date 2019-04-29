import React, { Fragment } from "react";

const Sushi = ({ piece }) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */
        false ? null : <img src={piece.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {piece.name} - ${piece.price}
      </h4>
    </div>
  );
};

export default Sushi;
