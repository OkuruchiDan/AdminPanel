import React from 'react';
import {InputComponent} from "../components/InputComponent";
import {connect} from "react-redux";

//this container is a provider for input component.
// Throws redux actions and store for components.
// Only logic Implementation.
export const InputContainerComponent = () => {
    return (
        <>
            <InputComponent />
        </>
    )
}

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

const InputContainer = connect(mapStateToProps,mapDispatchToProps)(InputContainerComponent)