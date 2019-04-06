import React from "react";
import { SkillItem, Search} from "../index";
import FormGroup from '@material-ui/core/FormGroup';
import "./style.css";

import { apiHelper } from "./scripts";

class SkillSet extends React.Component{
    
    componentDidMount(){
        const { skills, skillId } = this.props;

        switch(skillId){

            default:
            break;
        }
       
        let response = apiHelper.getSkillSet(skillId);
        response.then(
          result => this.successResponse(result, skillId), 
          error => this.failureResponse(error)
        );
    }

    
  successResponse(result){
    console.log(result);
  }

  failureResponse(error){
    console.log(error);
  }

    render(){
        const { skills, skillId} = this.props;
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