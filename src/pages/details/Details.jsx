import React, { useEffect, useState } from 'react'
import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
import classes from './details.module.scss'
import { useParams } from 'react-router-dom'
import CardSlider from '../../components/cardSlider/CardSlider'
import CastList from './CastList'
import VideoList from './VideoList'

const Details = () => {
  const { category, id } = useParams()

  const [item, setItem] = useState(null)

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} })
      setItem(response)
      console.log(response)
      window.scrollTo(0, 0)
    }
    getDetail()
  }, [category, id])

  return (
    <>
      {item && (
        <>
          <div
            className={classes['banner']}
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`
            }}
          ></div>
          <div
            className={`${classes['movie-content']} ${classes['container']}`}
          >
            <div className={classes['movie-content__poster']}>
              <div
                className={classes['movie-content__poster__img']}
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`
                }}
              ></div>
            </div>
            <div className={classes['movie-content__info']}>
              <h1 className={classes['title']}>{item.title || item.name}</h1>
              <div className={classes['genres']}>
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className={classes['genres__item']}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className={classes['overview']}>{item.overview}</p>
              <div className={classes['cast']}>
                <div className={classes['section__header']}>
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className={classes['container']}>
            <div className={classes['section']}>
              <VideoList id={item.id} />
            </div>
            <div className={classes['section']}>
              <div className={classes['section__header']}>
                <h2>Similar</h2>
              </div>
              <CardSlider category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default Details
