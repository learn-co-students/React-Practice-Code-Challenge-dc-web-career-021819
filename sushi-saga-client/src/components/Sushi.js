import React, { Fragment } from 'react'

const Sushi = (props) => {
  const sushi = props.sushi
  return (
    <div className="sushi">
      <div className="plate"
           onClick={(event) => props.onEatSushi(sushi)}>
        {props.eatenSushis.includes(sushi.id) ?
          null
          :
            <img value={sushi.price} src={sushi.img_url} alt={sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
