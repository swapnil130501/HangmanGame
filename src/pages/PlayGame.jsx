import React, { useState } from 'react'
import { useLocation, Link } from "react-router-dom";
import MaskedText from '../components/MaskedText/MaskedText';
import LetterButtons from '../components/LetterButtons/LetterButtons';

function PlayGame() {
    const {state} = useLocation();

    const [gussedLetters, setGussedLetters] = useState([]);
    
    function handleLetterClick(letter) {
        setGussedLetters([...gussedLetters, letter])
    }

    return (
        <div>
            <h1>Play Game</h1>
            <MaskedText text={state.wordSelected} gussedLetters = {gussedLetters}/>
            <div>
                <LetterButtons text={state.wordSelected} gussedLetters = {gussedLetters} onLetterClick={handleLetterClick}></LetterButtons>
            </div>
            <Link to="/start" className="text-blue-400">Start Game</Link>
        </div>
    )
}

export default PlayGame