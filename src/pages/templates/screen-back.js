import React from 'react'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

function ScreenBack (props) {
  const { paddingLeft } = props

  return (
    <Tooltip title='Clique para voltar a tela de listagem'>
      <Link to={'/'} style={
        {
          paddingLeft: paddingLeft,
          textDecoration: 'none',
          fontSize: '30px',
          color: 'black'
        }
      }>
        <Button variant='contained' color='primary'>
          Voltar
        </Button>
      </Link>
    </Tooltip>
  )
}

ScreenBack.propTypes = {
  paddingLeft: PropTypes.string.isRequired
}

export default ScreenBack
