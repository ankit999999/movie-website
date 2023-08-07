import React, { useEffect, useState } from 'react'
import tmdbApi from '../../api/tmdbApi'
// import classes from './details.module.scss'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { category, id } = useParams()
  const [itemData, setItemData] = useState({})

  useEffect(() => {
    const getItemData = async () => {
      try {
        const response = await tmdbApi.detail(category, id, {
          params: {}
        })
        setItemData(response)
      } catch (err) {
        console.log('error in Details.jsx')
      }
    }
    getItemData()
  }, [category, id])

  return <>Details</>
}

export default Details
