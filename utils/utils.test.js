const { sortEnglishWordsByHebrewAlphabet } = require("./utils");

describe('Sorts english words by hebrew alphabet', () => {
    test('throws an error when input is not a string', () => {
        expect(() => sortEnglishWordsByHebrewAlphabet(123)).toThrow('Input must be a single string.');
    });

    test('returns a sorted string based on Hebrew alphabet', () => {
        const input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
        const output = "adipiscing aliqua amet do dolor dolore tempor labore Lorem magna sit sed incididunt ipsum ut consectetur et elit eiusmod";
        expect(sortEnglishWordsByHebrewAlphabet(input)).toBe(output);
    });


    test('returns empty string if given one', () => {
        const input = "";
        const output = "";
        expect(sortEnglishWordsByHebrewAlphabet(input)).toBe(output);
    });
});

