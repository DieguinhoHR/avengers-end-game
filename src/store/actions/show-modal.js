export function showModal (open) {
  return {
    type: 'SHOW_MODAL',
    open
  }
}

export function closeModal (open) {
  return {
    type: 'HIDE_MODAL',
    open
  }
}
