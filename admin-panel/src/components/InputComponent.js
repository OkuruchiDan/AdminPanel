import React, {useState} from 'react';

export const InputComponent = (props) => {
    const { inputValueFromReduxStore , setInputValueToReduxStore} = props;
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return (
        <>
            <input type="text" onChange={handleInput()} value={input}/>
        </>
    )
}