import React from "react";
import { SkillItem, Search} from "../index";
import FormGroup from '@material-ui/core/FormGroup';
import "./style.css";

class SkillSet extends React.Component{
    
    render(){
        let sample = [1,3,3,4,3,3];

        return(
            <div className="skill-set">
            <Search/>
                 <FormGroup row col="4">
                    {
                        sample.map(id => <SkillItem />)
                    }
                 </FormGroup>
                
            </div>
        )
    }
};

export default SkillSet;