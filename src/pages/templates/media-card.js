import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// pega todas as funções e coloca em um grande objeto
import * as modalActions from 'store/actions/show-modal'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  aboutMore: {
    textDecoration: 'none'
  }
})

const color = {
  color: '#ff0000',
  fontSize: '20px'
}

function MediaCard (props) {
  const { classes, characters } = props

  return (
    <Grid
      container
      className={classes.root}
      spacing={8}
      style={{ paddingTop: '22px' }}
    >
      <Grid
        container
        className={classes.demo}
        justify='center'
        spacing={16}
      >
        { characters.map(character => (
          <Grid key={character.id} item>
            <Card className={classes.card}>
              <CardActionArea>
                <Link
                  to={`characters-update/${character.id}`}
                  className={classes.aboutMore}
                >
                  <CardMedia
                    className={classes.media}
                    image={character.thumbnail.path + '.' + character.thumbnail.extension}
                    title='Clique para atualizar'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {character.name}
                    </Typography>
                    <Typography component='p'>
                      {character.description
                        ? character.description
                        : <span style={color}>Não existe descrição no momento</span> }
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <Tooltip
                    title={`Clique para saber mais sobre ${character.name}`}
                    placement='right-start'
                  >
                    <Link
                      id='about-more'
                      to={`characters/${character.id}`}
                      className={classes.aboutMore}
                    >
                      Saiba mais
                    </Link>
                  </Tooltip>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  characters: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  open: state.open
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(modalActions, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MediaCard))
