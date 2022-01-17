export function myReplace(sentence, wordOne, wordTwo) {
    if (wordOne.charAt(0).match(/[A-Z]/) !== null) {

        let upperCase = wordTwo.slice(0, 1).toUpperCase();
        wordTwo = upperCase + wordTwo.slice(1);
        return sentence.replace(wordOne, wordTwo);

    } else if (wordTwo.charAt(0).match(/[A-Z]/) !== null) {

        let lowerCase = wordTwo.slice(0, 1).toLowerCase();
        wordTwo = lowerCase + wordTwo.slice(1);
        return sentence.replace(wordOne, wordTwo);

    } else {
        return sentence.replace(wordOne, wordTwo);
    }

}