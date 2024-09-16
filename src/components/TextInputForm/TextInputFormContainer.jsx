import React, { useState } from 'react'
import TextInputForm from './TextInputForm';

function TextInputFormContainer() {

    const[inputType, setinputType] = useState("password");

    function handleOnSubmit(event) {
        event.preventDefault();
        console.log("form submitted");
    }
    
    function handleTextInputChange(event) {
        console.log(event.target.value);
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