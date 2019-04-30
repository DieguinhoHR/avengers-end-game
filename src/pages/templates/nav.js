/* eslint-disable */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  menu: {
    color: 'white',
    textDecoration: 'none'
  },
  backgroundColor: {
    backgroundColor: '#FF2400'
  }
});

function Nav (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.backgroundColor}>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            <Link to='/' className={classes.menu}>Avengers END GAME</Link>
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
