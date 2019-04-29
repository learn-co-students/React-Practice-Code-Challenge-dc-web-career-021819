import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushisOnPlates.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatenSushis={props.eatenSushis} onEatSushi={props.onEatSushi}/>)
        }
        <MoreButton onGetMoreSushis={() => props.onGetMoreSushis(props.sushi)}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
