import React, { Component } from 'react'
import api from 'services/api'

const apiKey = '81f0bb4c1822d1761339071247ccba71'
const hash = '1442e8456edb92d6ce42edfaf813e074'

class Characters extends Component {
  state = {
    characters: []
  }

  async componentDidMount () {
    const response = await api.get(
      `characters?ts=1&apikey=${apiKey}&hash=${hash}`
    )
    this.setState({ characters: response.data.data.results })
  }

  render () {
    const { characters } = this.state

    return (
      <ul>
        { characters.map(character => (
          <div key={character.id}>
            <img
              src={character.thumbnail.path + '.' + character.thumbnail.extension}
              alt={character.name}
            />
            <li>{character.name}</li>
          </div>
        ))}
      </ul>
    )
  }
}

export default Characters
