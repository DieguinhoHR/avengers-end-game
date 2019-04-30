import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import api from 'services/api'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ScreenBack from '../templates/screen-back'
import Swal from 'sweetalert2'

import * as Constants from 'all-constants'

const styles = theme => ({
  card: {
    maxWidth: 900
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 700
  },
  textArea: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 1300
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
})

function CharacterUpdate (props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const { match, classes } = props

  useEffect(() => {
    const { id } = match.params

    api
      .get(`characters/${id}?ts=1&apikey=${Constants.API_KEY}&hash=${Constants.HASH}`)
      .then(result => {
        setName(result.data.data.results[0].name)
        setDescription(result.data.data.results[0].description)
      })
      .catch(error => {
        console.log(error.response)
      })
  }, [])

  function handleSave (e) {
    e.preventDefault()
    localStorage.setItem(name, description)

    Swal.fire(
      'Parabéns!',
      'Registro inserido com sucesso!',
      'success'
    )

    window.history.back()
  }

  return (
    <div className={classes.root}><br /><br />
      <ScreenBack paddingLeft={'16px'} />
      <h1 style={{ padding: '10px', fontSize: '50px' }}>Atualizar</h1>
      <form className={classes.container} noValidate autoComplete='off'>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <TextField
              id='standard-name'
              label='Nome'
              className={classes.textField}
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin='normal'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='standard-name'
              label='Descrição'
              className={classes.textArea}
              value={description}
              style={{ margin: 8 }}
              onChange={(e) => setDescription(e.target.value)}
              margin='normal'
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} style={{ padding: '10px' }}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={(e) => handleSave(e)}
          >
            Atualizar
          </Button>
        </Grid>
      </form>
    </div>
  )
}

CharacterUpdate.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withStyles(styles)(CharacterUpdate)
