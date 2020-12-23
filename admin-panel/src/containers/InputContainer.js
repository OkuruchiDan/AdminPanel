import React, {useState} from 'react';
import {InputComponent} from "../components/InputComponent";
import {connect} from "react-redux";
import {login} from "../actions/loginActions";
import {Button, Form} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import * as formik from 'formik'
import {string} from "prop-types";

//this container is a provider for input component.
// Throws redux actions and store for components.

const InputContainerComponent = (props) => {
    const {actions: {login}} = props;
    const [emailInput, setEmailInput] = useState('');
    const [ isEmailValid, setIsEmailValid] = useState();
    const [passwordInput, setPasswordInput] = useState('')
    const history = useHistory();

    const handleSubmit = () => {
            setIsEmailValid(true);
            history.push('/panel')
            login({emailInput, passwordInput})
    }

    const handleChange = (e) => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(emailInput)) {
            console.log("false")
            setIsEmailValid(true)
        } else {
            console.log("true")
            setIsEmailValid(false);
        }
    }

    return (

        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group controlId="loginForm">
                <Form.Label>Email address</Form.Label>
                <InputComponent required={true} inputValueFromReduxStore={emailInput}
                                setInputValueToReduxStore={setEmailInput}
                                type={'text'} placeholder={'Email'} isInvalid={isEmailValid} />
                <Form.Control.Feedback type="invalid" tooltip>
                    dasddsad
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputComponent required={true} inputValueFromReduxStore={passwordInput}
                                setInputValueToReduxStore={setPasswordInput}
                                type={'password'} placeholder={'Password'}/>
            </Form.Group>
            {/*<Link to={'/panel'}>*/}
            <Button variant="primary" type="submit" disabled={!(!isEmailValid && !!passwordInput)}>
                Login
            </Button>
            {/*</Link>*/}
        </Form>)

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