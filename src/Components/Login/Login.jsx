import React, { Component } from 'react';
import {form, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap'
import './Login.css'
import {browserHistory} from 'react-router'

export default class Login extends Component{

    handleLogin() {
        
        console.log('success :')
    }
    render(){
        return(
            <div>
                <form>
                    <FormGroup>
                            <InputGroup>
                                <FormControl type={"email"} placeholder="Your Email"
                                inputRef={(ref) => {this.email = ref}}/>
                            </InputGroup><br/>
                            <InputGroup>
                                <FormControl type={"password"} placeholder="Your Password"
                                inputRef={(ref) => {this.password = ref}}/>
                            </InputGroup>
                    </FormGroup>
                    <Button><link to={'/skills'}></link>Login</Button>
                </form>
            </div>
        )
    }

}