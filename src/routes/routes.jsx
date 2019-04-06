import {SkillItem,Search} from "../Components/index"
import SkillsExp from "../Components/SkillList/SkillsExp";
import Login from "../Components/Login/Login";

export default [
	{path : "/" , component : Login},
	{path : "/login" , component : Login},
	{path : "/search" , component : Search},
	{path: "/skills", component: SkillsExp},

];
