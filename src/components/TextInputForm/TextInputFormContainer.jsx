import React, { useState } from 'react'
import TextInputForm from './TextInputForm';
import { useNavigate } from 'react-router-dom';

function TextInputFormContainer() {

    const[inputType, setinputType] = useState("password");
    const[value, setValue] = useState("");

    const navigate = useNavigate();

    function handleOnSubmit(event) {
        event.preventDefault();
        console.log("form submitted", value);
        if(value) {
            navigate("/play")
        }
    }
    
    function handleTextInputChange(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        if(inputType === "password") {
            setinputType("text")
        }

        else {
            setinputType("password");
        }
    }

  return (
    <TextInputForm
        inputType={inputType}
        handleOnSubmit={handleOnSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
    >
    </TextInputForm>
  )
}

export default TextInputFormContainer;