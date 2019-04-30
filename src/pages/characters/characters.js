import React, { useEffect, useState } from 'react'
import api from 'services/api'
import MediaCard from 'pages/templates/media-card'

import * as Constants from 'all-constants'

function Characters () {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    api
      .get(`characters?ts=1&apikey=${Constants.API_KEY}&hash=${Constants.HASH}`)
      .then(result => setCharacters(result.data.data.results))
      .catch(error => {
        console.log(error.response)
      })
  }, [])

  return <MediaCard characters={characters} />
}

export default Characters
