const { mapper, PUNCTUATION } = require("../constants");

module.exports.sortEnglishWordsByHebrewAlphabet = (text) => {
    if (typeof text !== 'string') {
        throw new Error('Input must be a single string.');
    }
    return cleanText(text).split(" ").sort(handleSort).join(" ")
}

const cleanText = (text) => text.replace(PUNCTUATION, "")

const charToValue = (char) => char ? mapper[char.toUpperCase()] : -1

const handleSort = (wordA, wordB) => {
    const length = Math.max(wordA.length, wordB.length);

    for (let i = 0; i < length; i++) {
        const valA = charToValue(wordA[i])
        const valB = charToValue(wordB[i])

        if (valA > valB) return 1;
        if (valA < valB) return -1;

    }
    return 0
}