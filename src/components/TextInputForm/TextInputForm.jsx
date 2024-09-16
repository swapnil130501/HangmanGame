import React from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'

function TextInputForm({inputType, handleOnSubmit, handleTextInputChange, handleShowHideClick}) {
  return (
    <form onSubmit={handleOnSubmit}>
        <div>
            <TextInput
                type={inputType}
                label="Enter a word or a phrase"
                placeholder="Enter a word or a phrase here ..."
                onChangeHandler={handleTextInputChange}
            >
            </TextInput>
        </div>

        <div>
            <Button 
                styleType="warning"
                text={inputType === "password" ? "Show" : "Hide"}
                onClickHandler={handleShowHideClick}
            >
            </Button>
        </div>

        <div>
            <Button 
                type="submit"
                styleType="primary"
                text="Submit"
            >
            </Button>
        </div>
    </form>
  )
}

export default TextInputForm