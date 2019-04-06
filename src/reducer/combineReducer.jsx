import { combineReducers } from "redux";
import { GlobalAppReducer } from "../utilities/globalState/reducer";

import { reducer as skillListReducer } from "../Components/SkillList/reducer";
import { reducer as skillSetReducer } from "../Components/SkillSet/reducer"

export default combineReducers({
	globalAppData: GlobalAppReducer,
	skillCategoryData : skillListReducer,
	skillSetData : skillSetReducer
});
