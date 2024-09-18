import React, { useState } from 'react'
import TextInputForm from './TextInputForm';
import { useNavigate } from 'react-router-dom';

function TextInputFormContainer() {

    const[inputType, setinputType] = useState("password");
    const[value, setValue] = useState("");
    const[hint, setHint] = useState();

    const navigate = useNavigate();

    function handleOnSubmit(event) {
        event.preventDefault();
        console.log("form submitted", value);
        if(value) {
            navigate(`/play`, { state: {wordSelected: value, hintGiven: hint}});
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

     const handleHintTextInputChange = (event) => {
        setHint(event.target.value);
    };

  return (
    <TextInputForm
        inputType={inputType}
        handleOnSubmit={handleOnSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
        handleHintTextInputChange={handleHintTextInputChange}
    >
    </TextInputForm>
  )
}

export default TextInputFormContainer;