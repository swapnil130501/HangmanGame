const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({text, gussedLetters, onLetterClick}) {

    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(gussedLetters);

    const buttonStyle = (letter) => {
        if(guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        }

        else {
            return 'bg-blue-500';
        }
    }

    function handleLetterClick(event) {
        const ch = event.target.value;
        onLetterClick?.(ch);
    }

    const buttons = ALPHABETS.map((it, idx) => {
        return (
            <button
                key={idx}
                value={it}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(it)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(it)}`}
                >
                {it}
            </button>
        )
    });

    return (
        <>
            {buttons}
        </>
    )
}

export default LetterButtons;