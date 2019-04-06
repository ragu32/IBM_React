import { Helper } from "../../utilities/helper";

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


export const actions = {
    setPlatForm : value => Helper.actionReturnType(skillSetType.setPlatForm,value),
    setProgramingLang : value => Helper.actionReturnType(skillSetType.setProgramingLang,value),
    setTools : value => Helper.actionReturnType(skillSetType.setTools,value),
    setFrameWork : value => Helper.actionReturnType(skillSetType.setFrameWork,value),
    setPractice : value => Helper.actionReturnType(skillSetType.setPractice,value),
    setDataStorage : value => Helper.actionReturnType(skillSetType.setDataStorage,value)
};