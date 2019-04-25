import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiList.length > 0 ?
            <Fragment>
              <Sushi sushi={props.sushiList[0]} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>
              <Sushi sushi={props.sushiList[1]} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>
              <Sushi sushi={props.sushiList[2]} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>
              <Sushi sushi={props.sushiList[3]} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>
            </Fragment>
          : null
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
