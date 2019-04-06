import { Helper } from "../../utilities/helper";

export const skillCategory = [
    {
        id : 0,
        name : "PlatForm"
    },
    {
        id : 1,
        name : "Programming Languages"
    },
    {
        id : 2,
        name : "Tools"
    },
    {
        id : 3,
        name : "Frameworks"
    }
]

export const skillCategoryType = {
    setSkillCategory : "SET_SKILLCATEGORY"
};



export const actions = {
    setSkillCategory : value => Helper.actionReturnType(skillCategoryType.setSkillCategory,value)
};