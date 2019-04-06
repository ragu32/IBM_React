import {appInitialState, appActionTypes as ActionType, setState } from "./action";

export const GlobalAppReducer = (state = appInitialState, action) => {
	switch(action.type){
	case ActionType.setCurrentLocationMenu:
		state = setState.currentLocationMenu(state,action.payload);
		break;

	case ActionType.setCurrentSelectedTab:
		state = setState.currentSelectedTab(state,action.payload);
		break;

	case ActionType.setValidaion:
		state = setState.validation(state,action.payload);
		break;

	default:
		break;
	}
	return state;
};
