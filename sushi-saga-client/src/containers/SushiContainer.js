import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.currentSushi.map(sushi => (
          <Sushi key={sushi.id} piece={sushi} />
        ))}
        <MoreButton getMoreSushis={props.getMoreSushis} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
