import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1
  }
}

const appBar = {
  backgroundColor: '#ff0000'
}

function Nav (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position='static' style={appBar}>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Avengers END GAME
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Nav)
