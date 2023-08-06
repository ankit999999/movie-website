import React from 'react'

import { category } from '../../api/tmdbApi'

import apiConfig from '../../api/apiConfig'

import classes from './card.module.scss'

import { Link } from 'react-router-dom'

const Card = (props) => {
  const link = '/' + category[props.category] + '/' + props.data.id

  return (
    <Link to={link} className={classes['card-container']}>
      <img src={apiConfig.w500Image(props.data.poster_path)}></img>
      <span className={`${classes['figcaption']} ${classes['figcaption1']}`}>
        {props.data.title || props.data.original_name}
      </span>
      <br />
      <span className={`${classes['figcaption']} ${classes['figcaption2']}`}>
        {props.data.release_date || props.data.first_air_date}
      </span>
    </Link>
  )
}

export default Card
