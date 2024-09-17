import React from 'react'
import TextInputFormContainer from '../components/TextInputForm/TextInputFormContainer'
import {Link} from "react-router-dom"

function StartGame() {
  return (
    <>
        <h1>Start Game</h1>
        <TextInputFormContainer></TextInputFormContainer>
        <Link to="/play" className="text-blue-400">Play Game</Link>
    </>
  )
}

export default StartGame