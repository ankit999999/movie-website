import React from 'react'

import Card from '../card/Card'

import classes from './cardSlider.module.scss'

const CardSlider = ({ dataList, heading }) => {
  return (
    <div className={classes['card-carousal-container']}>
      <h1 className={classes.heading}>{heading}</h1>
      <div className={`${classes['card-carousal']} ${classes['snaps-inline']}`}>
        {dataList.map((data, idx) => {
          return <Card data={data} key={idx} />
        })}
      </div>
    </div>
  )
}

export default CardSlider
