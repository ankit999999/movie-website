import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'

import classes from './details.module.scss'

const CastList = (props) => {
  const { category } = useParams()

  const [casts, setCasts] = useState([])

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id)
      setCasts(res.cast.slice(0, 5))
    }
    getCredits()
  }, [category, props.id])
  return (
    <div className={classes['casts']}>
      {casts.map((item, i) => (
        <div key={i} className={classes['casts__item']}>
          <div
            className={classes['casts__item__img']}
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`
            }}
          ></div>
          <p className={classes['casts__item__name']}>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default CastList
