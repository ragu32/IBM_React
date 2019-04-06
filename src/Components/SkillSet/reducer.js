import { skillSetData, skillSetType as ActionType, setState } from "./action";

export const reducer = (state = skillSetData, action) => {
	switch(action.type){
	case ActionType.setPlatForm:
		state = setState.platForm();
		break;
	case ActionType.setProgramingLang:
		state = setState.programingLanguage(state,action.payload);
		break;

	case ActionType.setTools:
		state = setState.tools(state,action.payload);
		break;

	case ActionType.setFrameWork:
		state = setState.frameWork(state,action.payload);
		break;

	case ActionType.setPractice:
		state = setState.practice(state,action.payload);
		break;

	case ActionType.setDataStorage:
		state = setState.dataStorage(state,action.payload);
        break;
        
	default:
		break;
	}	
	return state;
};
