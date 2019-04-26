import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.sushiArray.map(sushiObj => <Sushi key={sushiObj.id} sushiObj={sushiObj} eatenSushis={props.eatenSushis} sushiClickHandler={props.sushiClickHandler} /> )}
        <MoreButton moreSushiEventHandler={props.moreSushiEventHandler} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
