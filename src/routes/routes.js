import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CharacterShow from 'pages/characters/character-show'
import CharacterUpdate from 'pages/characters/character-update'
import { Characters } from 'pages/characters'
import Nav from 'pages/templates/nav'
import Progress from 'pages/templates/progress'

function Routes () {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      return setLoading(false)
    }, 1000)
  })

  return (
    <BrowserRouter>
      <Nav />
      <Progress loading={loading} />
      <Switch>
        <Route path='/' component={Characters} exact />
        <Route path='/characters/:id' component={CharacterShow} />
        <Route path='/characters-update/:id' component={CharacterUpdate} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
