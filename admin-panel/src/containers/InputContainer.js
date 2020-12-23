import React, {useState} from 'react';
import {InputComponent} from "../components/InputComponent";
import {connect} from "react-redux";
import {login} from "../actions/loginActions";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

//this container is a provider for input component.
// Throws redux actions and store for components.

const InputContainerComponent = (props) => {
    const {actions: {login}} = props;
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('')

    return (
        <Form>

            <Form.Group controlId="loginForm">
                <Form.Label>Email address</Form.Label>
                <InputComponent inputValueFromReduxStore={emailInput} setInputValueToReduxStore={setEmailInput}
                                type={'text'} placeholder={'Email'}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputComponent inputValueFromReduxStore={passwordInput} setInputValueToReduxStore={setPasswordInput}
                                type={'password'} placeholder={'Password'}/>
            </Form.Group>
            <Link to={'/panel'}>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Link>
        </Form>
    )
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            login: (payload) => dispatch(login(payload))
        }
    }
}

export const InputContainer = connect(mapStateToProps, mapDispatchToProps)(InputContainerComponent)