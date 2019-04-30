import React, { useEffect, useState } from 'react'
import api from 'services/api'
import MediaCard from 'pages/templates/media-card'
import Search from 'pages/templates/search'
import Swal from 'sweetalert2'

import * as Constants from 'all-constants'

function Characters () {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters()
  }, [])

  function getAllCharacters () {
    api
      .get(`characters?ts=1&apikey=${Constants.API_KEY}&hash=${Constants.HASH}`)
      .then(result => setCharacters(result.data.data.results))
      .catch(error => {
        console.log(error.response)
      })
  }

  function handleSearch (e) {
    const ENTER = 13
    const keyCode = e.keyCode
    const value = e.target.value

    if (keyCode === ENTER) {
      return api
        .get(`characters?name=${value}&ts=1&apikey=${Constants.API_KEY}&hash=${Constants.HASH}`)
        .then(result => {
          if (result.data.data.results.length) {
            setCharacters(result.data.data.results)
          } else {
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Personagem não existente na base de dados!'
            })
          }
        })
        .catch(error => {
          getAllCharacters()

          console.log(error)
        })
    }
  }

  return (
    <>
      <Search handleSearch={(e) => handleSearch(e)} />
      <MediaCard characters={characters} />
    </>
  )
}

export default Characters
