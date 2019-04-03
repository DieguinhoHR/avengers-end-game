import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MainPage } from 'pages/main'
import { CssBaseline } from '@material-ui/core'

function App () {
  return (
    <>
      <CssBaseline>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={MainPage} exact />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </>
  )
}

export default App
