export function fearNotLetter(string) {
    let currCharCode = string.charCodeAt(0);
    let missing = undefined;

    string
        .split("")
        .forEach(letter => {
            if (letter.charCodeAt(0) === currCharCode) {
                currCharCode++;
            } else {
                missing = String.fromCharCode(currCharCode);
            }
        });
    return missing;
}