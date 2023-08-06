import React from 'react'

import { movieType, tvType, category } from '../../api/tmdbApi.js'

import CardSlider from '../../components/cardSlider/CardSlider'
import Hero from '../../components/hero/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      <CardSlider
        category={category.movie}
        type={movieType.popular}
        heading="Trending Movies"
      />
      <CardSlider
        category={category.tv}
        type={tvType.popular}
        heading="Trending on TV"
      />
    </>
  )
}

export default Home
