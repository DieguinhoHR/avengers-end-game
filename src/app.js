import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CharacterShow from 'pages/characters/character-show'
import { Characters } from 'pages/characters'
import { CssBaseline } from '@material-ui/core'

import Nav from 'pages/templates/nav'

function App () {
  return (
    <>
      <CssBaseline>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path='/' component={Characters} exact />
            <Route path='/characters/:id' component={CharacterShow} />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </>
  )
}

export default App
