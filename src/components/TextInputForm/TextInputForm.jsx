import React from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'

function TextInputForm({inputType, handleOnSubmit, handleTextInputChange, handleShowHideClick, handleHintTextInputChange}) {
  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-6 w-full">
        <div className="w-full">
            <TextInput
                type={inputType}
                label="Enter a word or a phrase"
                placeholder="Enter a word or a phrase here ..."
                onChangeHandler={handleTextInputChange}
            >
            </TextInput>

            <TextInput
                inputType="text"
                label="Enter Game Hint"
                placeholder="Optional hint"
                onChangeHandler={handleHintTextInputChange}
            />
        </div>

        <div className="w-full flex justify-center">
            <Button 
                styleType="warning"
                text={inputType === "password" ? "Show" : "Hide"}
                onClickHandler={handleShowHideClick}
            >
            </Button>
        </div>

        <div className="w-full flex justify-center">
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