export default function profileReducer(state = {
  profile: {},
  added: false,
  error: null,
}, action) {
  switch (action.type) {
    case "Add_DATA": {
      return { ...state, added: true, profile: action.info };
    }
    default:
      return state;
  }
}