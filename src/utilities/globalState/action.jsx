import { Helper } from "../helper";

//set the initial-state value here.
//This will be loaded by react when at @@react/init (initialization).
export const appInitialState = {
	currentLocationMenu : undefined,
	currentSelectedTab : 0,
	validation : {validator : undefined,
		showErrror : false}
};

//set the action-types for all the state-fields.
export const appActionTypes = {
	setCurrentLocationMenu: "SET_CURRENT_LOCATION_MENU",
	setCurrentSelectedTab : "SET_CURRENT_SELECTED_TAB",
	setValidaion : "SET_VALIDATION"
};

//set the updated-state to existing-state(previous-state).
//This will be executed by respective reducer(medication/home/reducer) when at even dispatched.
export const setState = {
	currentLocationMenu: (state, value) => {
		return {
			...state,
			currentLocationMenu: value
		};
	},
	currentSelectedTab : (state, value) => {
		return {
			...state,
			currentSelectedTab : value
		};
	},
	validation : (state, value) => {
		return {
			...state,
			validation : value
		};
	}
};

//This actions will be used by respective boilerplate(medication/home/home.jsx) when at specific even dispatched from UI.
export const actions ={
	setcurrentLocationMenuData: value => Helper.actionReturnType(appActionTypes.setCurrentLocationMenu,value),
	setcurrentSelectedTabData: value => Helper.actionReturnType(appActionTypes.setCurrentSelectedTab,value),
	setValidaion: value => Helper.actionReturnType(appActionTypes.setValidaion,value)
};