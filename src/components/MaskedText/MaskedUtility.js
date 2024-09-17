export function getMaskedString(originalWord, gussedLetters) {
    gussedLetters = gussedLetters.map(it => it.toUpperCase());

    const gussedLetterSet = new Set(gussedLetters);

    const result = originalWord.toUpperCase().split('').map(it => {
        if(gussedLetterSet.has(it)) {
            return it;
        }

        else {
            return "_";
        }
    });

    return result;
}