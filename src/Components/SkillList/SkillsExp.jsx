import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { SkillSet } from "../index";
import { apiHelper } from "./scripts";
import { actions } from "./action";

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});



class SkillsExp extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  componentDidMount(){
    debugger
    let response = apiHelper.getSkillCategory();
    response.then(
      result => this.successResponse(result), 
      error => this.failureResponse(error)
    );
  }

  successResponse(result){
    setTimeout(() => {
      
    }, 2000);
    debugger
    console.log("aa",result);
    this.props.setSkillCategory(result);
  }

  failureResponse(error){
    console.log(error);
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    const {skillCategoryData, skillSetData} = this.props;

    console.log("__",this.props)
    return (
      <div className={classes.root}>
      {
        skillCategoryData && 
        skillCategoryData.map((skillCategory,index) =>
          <ExpansionPanel expanded={expanded === index} onChange={this.handleChange(index)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{skillCategory.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              <SkillSet skills={skillSetData} skillId={skillCategory.id}/>
              </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        )
      }
        
        
        
               
      </div>)
    }
}

SkillsExp.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  skillCategoryData : state.skillCategoryData,
  skillSetData : state.skillSetData
});

const mapDispatchToProps = (dispatch) => {
	return {
		setSkillCategory: value => dispatch(actions.setSkillCategory(value))
	};
};


const SkillWrapper = withStyles(styles)(SkillsExp);

export default connect(mapStateToProps, mapDispatchToProps)(SkillWrapper);
