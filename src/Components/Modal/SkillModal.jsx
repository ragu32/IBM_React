import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });
  
class SkillModal extends React.Component{
    state = {
        value: '0-3',
        checkedB: false,
        checkedA: false
      };
    
    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    render(){
        const { classes } = this.props;
        return(
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Years of experiance using {}</FormLabel>
                    <RadioGroup
                
                        name="gender1"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="0-3" control={<Radio />} label="0-3" />
                        <FormControlLabel value="4-6" control={<Radio />} label="4-6" />
                        <FormControlLabel value="7-9" control={<Radio />} label="7-9" />
                        <FormControlLabel value="10+" control={<Radio />} label="10+" />
                    </RadioGroup>
                    <FormLabel component="article" className={classes.formControl}>Profeciency</FormLabel>
                    <FormLabel component="article" className={classes.formControl}>I am currenty Using </FormLabel>
                    <FormControlLabel
                        control={
                            <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleCheckboxChange('checkedA')}
                            value="checkedA"
                            color="primary"
                            style={{float:"left",marginLeft:"10px"}}
                            />
                            }
                            label="At Work"
                            />
                    <FormControlLabel
                        control={
                            <Checkbox
                            checked={this.state.checkedB}
                            onChange={this.handleCheckboxChange('checkedB')}
                            value="checkedB"
                            color="primary"
                            style={{float:"left",marginLeft:"10px"}}
                            />
                            }
                            label="Outside Work"
                            />
                    
                    </FormControl>
                    
            </div>
        )
    }
}
SkillModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillModal)