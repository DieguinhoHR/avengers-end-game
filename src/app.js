import React from 'react'
import { CssBaseline } from '@material-ui/core'
import Routes from 'routes/routes'
import { Provider } from 'react-redux' // atualiza os components da nossa app
import Grid from '@material-ui/core/Grid'

import store from 'store'

function App () {
  return (
    <Grid container>
      <Provider store={store}>
        <CssBaseline>
          <Routes />
        </CssBaseline>
      </Provider>
    </Grid>
  )
}

export default App
