export default function profileReducer(state = {
  profile: {},
  added: false,
  error: null,
  updated: false
}, action) {
  switch (action.type) {
    case "Add_DATA": {
      return { ...state, added: true, updated: false, profile: action.info };
    }
    case "Update_DATA": {
        return {...state, added: true, updated: true, profile: { ...action.info }}
    }
    default:
      return state;
  }
}