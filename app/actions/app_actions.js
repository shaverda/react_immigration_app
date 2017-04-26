export function choose_greencard() {
  return {
    type: 'INC_COUNT',
    payload: 1
  }
}

export function choose_naturalization() {
  return {
    type: 'DEC_COUNT',
    payload: 1
  }
}
