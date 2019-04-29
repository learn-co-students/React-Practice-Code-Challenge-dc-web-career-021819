import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props)
  // console.log(props.fourSushies())
  const sushies = props.fourSushies()
  // console.log(sushies)
  return (
    <Fragment>
      <div className="belt">
        {
          sushies !== null ? sushies.map((s) => <Sushi key={s.id} item={s} addIdToEatenSushi={props.addIdToEatenSushi} checkEatenSushi={props.checkEatenSushi}/>) : null
        }
        <MoreButton updateDisplayNumber={props.updateDisplayNumber}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
