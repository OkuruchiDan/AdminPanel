import React, {useState} from 'react';
import {Form} from "react-bootstrap";


export const InputComponent = (props) => {
    const { inputValueFromReduxStore , setInputValueToReduxStore, placeholder, type} = props;
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInputValueToReduxStore(e.target.value)
    }
    return (
        <>
            <Form.Control placeholder={placeholder} type={type} onChange={(e) => handleInput(e)} value={inputValueFromReduxStore}/>
        </>
    )
}