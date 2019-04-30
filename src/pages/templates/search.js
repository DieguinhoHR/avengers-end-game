import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
})

function Search (props) {
  const { classes, handleSearch } = props

  return (
    <div className={classes.search}>
      <Tooltip
        title={'Tecle "Enter" para realizar a busca pelo personagem'}
        placement='right-start'>
        <TextField
          type='search'
          id='outlined-full-width'
          onKeyUp={handleSearch}
          style={{ margin: 12, width: '1830px', paddingLeft: '55px' }}
          placeholder='Digite o nome de um personagem (ex: iron man)'
          fullWidth
          margin='normal'
          variant='outlined'
        />
      </Tooltip>
    </div>
  )
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func
}

export default withStyles(styles)(Search)
