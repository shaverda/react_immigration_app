import { combineReducers } from "redux";
import status from "./counter";
import profile from "./profile_reducer";

export default combineReducers({
  profile
});