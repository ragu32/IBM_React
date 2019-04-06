import { skillCategory, skillCategoryType as ActionType, setState } from "./action";

export const reducer = (state = skillCategory, action) => {
	switch(action.type){
	case ActionType.setSkillCategory:
		state = action.payload
		break;
	
	default:
		break;
	}	
	return state;
};
