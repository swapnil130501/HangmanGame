import React, { useState } from 'react'
import { useLocation, Link } from "react-router-dom";
import MaskedText from '../components/MaskedText/MaskedText';
import LetterButtons from '../components/LetterButtons/LetterButtons';
import HangMan from '../components/HangMan/HangMan';

function PlayGame() {
    const {state} = useLocation();

    const [gussedLetters, setGussedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if(state.wordSelected.toUpperCase().includes(letter)) {

        }
        else {
            setStep(step + 1);
        }

        setGussedLetters([...gussedLetters, letter])
    }

    return (
        <div>
            <h1>Play Game</h1>
            <MaskedText text={state.wordSelected} gussedLetters = {gussedLetters}/>
            <div>
                <LetterButtons text={state.wordSelected} gussedLetters = {gussedLetters} onLetterClick={handleLetterClick}></LetterButtons>
            </div>
            <div>
                <HangMan step={step}></HangMan>
            </div>
            <Link to="/start" className="text-blue-400">Start Game</Link>
        </div>
    )
}

export default PlayGame