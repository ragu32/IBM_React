import { Http} from "../../utilities/api/http";

const request = {
	skillSet: { url: "/skill/", method: "GET"}
};


export const apiHelper = {
    getSkillSet : (skillId) => {
        let req = {...request.skillSet};
        req.url = req.url + skillId
        return Http(req);
    }
};