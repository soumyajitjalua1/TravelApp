import React from 'react'
import Filter from './filter'
import Listings from './Listing'
import './Hotel_search.css'
const Hotel_search = () => {
  return (
    <div className='tour-page'>
        <Filter/>
        <Listings/>
    </div>
  )
}

export default Hotel_search