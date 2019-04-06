import { Http} from "../../utilities/api/http";

const request = {
	skillCategory: { url: "api/skillCategory", method: "GET"}
};


export const apiHelper = {
    getSkillCategory : () => {
        let req = {...request.skillCategory};
        return Http(req);
    }
};