import React from 'react'

import { genreType } from '../../api/tmdbApi'

import apiConfig from '../../api/apiConfig'

import classes from './card.module.scss'

import { Link } from 'react-router-dom'

const Card = ({ data }) => {
  const genre = []
  data.genre_ids.slice(0, 2).map((item) => {
    if (genreType[item]) genre.push(genreType[item])
    else genre.push('Unknown')
  })

  return (
    <Link to="/TODO" className={classes['card-container']}>
      <img src={apiConfig.originalImage(data.poster_path)}></img>
      <span className={`${classes['figcaption']} ${classes['figcaption1']}`}>
        {data.title ? data.title : data.original_name}
      </span>
      <br />
      <span className={`${classes['figcaption']} ${classes['figcaption2']}`}>
        {data.release_date ? data.release_date : data.first_air_date}
      </span>
    </Link>
  )
}

export default Card
