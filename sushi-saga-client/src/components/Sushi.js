import React, { Fragment } from 'react'

const Sushi = (props) => {
  const item = props.item
  return (
    <div className="sushi">
      <div className="plate"
           onClick={(event) => props.addIdToEatenSushi(event, props)}
           data-sushi-id={item.id}>
        {
          /* Tell me if this sushi has been eaten! */
          !props.checkEatenSushi ?
            null
          :
            <img src={item.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {item.name} - ${item.price}
      </h4>
    </div>
  )
}

export default Sushi
