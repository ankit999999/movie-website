import React from 'react'

import { useParams } from 'react-router'

import MovieGrid from '../../components/movie-grid/MovieGrid'

import classes from './catalog.module.scss'

const Catalog = () => {
  const { category } = useParams()
  return (
    <>
      <div className={classes['container']}>
        <div className={classes['section']}>
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog
