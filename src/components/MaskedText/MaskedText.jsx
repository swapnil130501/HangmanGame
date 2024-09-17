import React from 'react'
import { getMaskedString } from './MaskedUtility'

function MaskedText({text, gussedLetters}) {
    const maskedString = getMaskedString(text, gussedLetters);
    return (
        <>
            {maskedString.map((it, idx) => {
                return (
                    <span key = {idx} className='mx-1'>
                        {it}
                    </span>
                )
            })}
        </>
    )
}

export default MaskedText