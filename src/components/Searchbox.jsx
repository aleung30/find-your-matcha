import { SearchBox } from '@mapbox/search-js-react';
import React from 'react'


 const Searchbox = () => {
  return (

    <SearchBox
      accessToken = {import.meta.env.VITE_MAPBOX_KEY}
      options={{
        language: 'en',
        country: 'CA'
      }}
       
    />

  )
}
export default Searchbox


