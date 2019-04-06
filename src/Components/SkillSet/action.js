import { Helper } from "../../utilities/helper";
//set the initial-state value here.
//This will be loaded by react when at @@react/init (initialization).
export const skillSetData = {
    platForm : [],
    programingLanguage : [],
    tools : [],
    frameWork : [],
    practice : [],
    dataStorage : []
};

//set the action-types for all the state-fields.
export const skillSetType = {
    setPlatForm : "SET_FLATFORM",
    setProgramingLang : "SET_PROGRAMINGLANG",
    setTools : "SET_TOOLS",
    setFrameWork : "SET_FRAMEWORK",
    setPractice : "SET_PRACTICE",
    setDataStorage : "SET_DATA"
};

//set the updated-state to existing-state(previous-state).
//This will be executed by respective reducer(registration/patientAdd/reducer) when at even dispatched.
export const setState = {
	platForm:(state,value) => {
		return{
			...state,
			platForm : value
		};
	},
	programingLanguage:(state,value) => {
		return{
			...state,
			programingLanguage : value
		};
	},
	tools:(state,value) => {
		return{
			...state,
			tools : value
		};
	},
	frameWork:(state,value) => {
		return{
			...state,
			frameWork : value
		};
	},
	practice:(state,value) => {
		return{
			...state,
			practice : value
		};
	},
	dataStorage:(state,value) => {
		return{
			...state,
			dataStorage : value
		};
	}
};

//This actions will be used by respective boilerplate(registration/patientAdd/patientAdd.jsx) when at specific even dispatched from UI.
export const actions = {
    setPlatForm : value => Helper.actionReturnType(skillSetType.setPlatForm,value),
    setProgramingLang : value => Helper.actionReturnType(skillSetType.setProgramingLang,value),
    setTools : value => Helper.actionReturnType(skillSetType.setTools,value),
    setFrameWork : value => Helper.actionReturnType(skillSetType.setFrameWork,value),
    setPractice : value => Helper.actionReturnType(skillSetType.setPractice,value),
    setDataStorage : value => Helper.actionReturnType(skillSetType.setDataStorage,value)
};