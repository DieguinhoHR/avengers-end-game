import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Routes from 'routes/routes'
import { Provider } from 'react-redux' // atualiza os components da nossa app

import store from 'store'

function App () {
  return (
    <Provider store={store}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </Provider>
  )
}

export default App
