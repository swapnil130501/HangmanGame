import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'

function Home() {
    const [word, setWord] = useState('');
    const [hint, setHint] = useState('');

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        const randomIdx = Math.floor(Math.random() * data.length);
        setWord(data[randomIdx].wordValue);
        setHint(data[randomIdx].wordHint);
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <>
            <Link to="/play" state={{wordSelected: word, wordHint: hint}}>
                <Button text="Single Player"></Button>
            </Link>
            <br></br>
            <Link to = "/start">
                <div className='mt-4'>
                    <Button text="Multiplayer Player" styleType='secondary'></Button>
                </div>
            </Link>
        </>
    )
}

export default Home