import { combineReducers } from "redux";
import { GlobalAppReducer } from "../utilities/globalState/reducer";

export default combineReducers({
	globalAppData: GlobalAppReducer
});
