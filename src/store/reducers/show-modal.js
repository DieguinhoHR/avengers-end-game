const INITIAL_STATE = {
  open: false
}

export default function modal (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { ...state, open: action.open }
    case 'HIDE_MODAL':
      return false
    default:
      return state
  }
}

// {
//  modal: [] nome da variável guardada no estado
// }
