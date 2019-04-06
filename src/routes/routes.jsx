import {SkillItem,Search} from "../Components/index"
import SkillsExp from "../Components/SkillList/SkillsExp";
import Login from "../Components/Login/Login";
import MySummary from "../Components/Summary/MySummary";

export default [
	{path : "/" , component : SkillsExp},
	{path : "/login" , component : Login},
	{path : "/search" , component : Search},
	{path: "/skills", component: SkillsExp},
	{path:"/summary", component: MySummary}
];
