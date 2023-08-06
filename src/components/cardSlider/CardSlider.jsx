import React, { useState, useEffect } from 'react'

import tmdbApi, { category } from '../../api/tmdbApi'

import Card from '../card/Card'

import classes from './cardSlider.module.scss'

const CardSlider = (props) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getList = async () => {
      let response = null
      const params = {}

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params })
            break
          default:
            response = await tmdbApi.getTvList(props.type, { params })
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id)
      }
      setItems(response.results)
    }
    getList()
  }, [props.category, props.id, props.type])

  return (
    <div className={classes['card-carousal-container']}>
      <h1 className={classes.heading}>{props.heading}</h1>
      <div className={`${classes['card-carousal']} ${classes['snaps-inline']}`}>
        {items.map((data, idx) => {
          return <Card data={data} key={idx} category={props.category} />
        })}
      </div>
    </div>
  )
}

export default CardSlider
