import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MainPage } from 'pages/main'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
