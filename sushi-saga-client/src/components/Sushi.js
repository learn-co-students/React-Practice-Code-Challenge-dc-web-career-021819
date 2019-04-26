import React, { Fragment } from 'react'

const Sushi = (props) => {
  let sushiEaten = props.eatenSushis.includes(props.sushiObj.id);
  return (
    <div className="sushi">
      <div data-id={props.sushiObj.id} data-price={props.sushiObj.price} className="plate" onClick={sushiEaten ? null : props.sushiClickHandler}>
        {
          sushiEaten ?
            null
          :
            <img src={props.sushiObj.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi
