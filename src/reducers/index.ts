import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import { IGeneralState } from "./generalReducer";

export interface IStore {
  general: IGeneralState;
}

export default combineReducers({
  general: generalReducer
});
