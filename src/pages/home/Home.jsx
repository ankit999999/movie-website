import React, { useEffect, useState } from 'react'

import tmdbApi, { movieType, tvType, category } from '../../api/tmdbApi.js'

import CardSlider from '../../components/cardSlider/CardSlider'
import Hero from '../../components/hero/Hero'

const Home = () => {
  const [heroSlideItems, setHeroSlideItems] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [trendingOnTv, setTrendingOnTv] = useState([])

  useEffect(() => {
    const getTopMovies = async () => {
      const params = { page: 1, language: 'en' }
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params
        })
        const tvresponse = await tmdbApi.getTvList(tvType.popular, {
          params
        })

        setHeroSlideItems(response.results.slice(0, 3))
        setTrendingMovies(response.results)
        setTrendingOnTv(tvresponse.results)
        console.log(response)
        // console.log(tvresponse);
      } catch {
        console.log('error')
      }
    }
    getTopMovies()
  }, [])

  return (
    <>
      {heroSlideItems.length !== 0 && <Hero data={heroSlideItems} />}
      {trendingMovies.length !== 0 && (
        <CardSlider
          dataList={trendingMovies}
          heading="Trending Movies"
          category={category.movie}
        />
      )}
      {trendingOnTv.length !== 0 && (
        <CardSlider
          dataList={trendingOnTv}
          heading="Trending TV Shows"
          category={category.tv}
        />
      )}
    </>
  )
}

export default Home
