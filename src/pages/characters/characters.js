import React, { useEffect, useState } from 'react'
import api from 'services/api'
import MediaCard from 'pages/templates/media-card'

const apiKey = '81f0bb4c1822d1761339071247ccba71'
const hash = '1442e8456edb92d6ce42edfaf813e074'

function Characters () {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    api
      .get(`characters?ts=1&apikey=${apiKey}&hash=${hash}`)
      .then(result => setCharacters(result.data.data.results))
      .catch(error => {
        console.log(error.response)
      })
  }, [])

  return <MediaCard characters={characters} />
}

export default Characters
