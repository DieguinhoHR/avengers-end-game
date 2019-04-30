import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import moment from 'moment'

import api from 'services/api'

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
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
})

function CharacterShow (props) {
  const [character, setCharacter] = useState([])
  const { classes, match } = props

  useEffect(() => {
    const { id } = match.params

    api
      .get(`characters/${id}?ts=1&apikey=${Constants.API_KEY}&hash=${Constants.HASH}`)
      .then(result => setCharacter(result.data.data.results))
      .catch(error => {
        console.log(error.response)
      })
  }, [])

  return (
    <Grid
      container
      className={classes.root}
      spacing={16}
      style={{ paddingTop: '30px' }}
    >
      <Grid
        container
        className={classes.demo}
        justify='center'
        spacing={16}
      >
        { character.map(item => (
          <Card className={classes.card} key={item.id}>
            <CardHeader
              avatar={
                <Avatar aria-label='Recipe' className={classes.avatar}>
                  { item.name.substring(0, 1) }
                </Avatar>
              }
              title={item.name}
              subheader={moment(item.modified).format('DD/MM/YYYY HH:mm:ss')}
            />
            <CardMedia
              className={classes.media}
              image={item.thumbnail.path + '.' + item.thumbnail.extension}
              title={item.name}
            />
            <CardContent>
              <Typography paragraph variant='h4'>Séries:</Typography>
              {item.series.items.map(serie =>
                <Grid spacing={32} justify='center'><br />
                  <Chip
                    avatar={<Avatar>{serie.name.substring(0, 1)}</Avatar>}
                    label={serie.name}
                    clickable
                    className={classes.chip}
                    color='primary'
                  />
                </Grid>
              )}
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  )
}

CharacterShow.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withStyles(styles)(CharacterShow)
