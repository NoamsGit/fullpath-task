'use strict';
const { GENERIC_ERROR, INFO } = require("./constants");
const { sortEnglishWordsByHebrewAlphabet } = require("./utils/utils");


module.exports.handler = async (event) => {
  try {
    console.log({ "event.body": event.body })
    const body = JSON.parse(event.body)
    const inputText = body.text;
    if (!inputText) {
      throw new Error('Input must be in format: {text: <input>}.');
    }
    const parsedText = sortEnglishWordsByHebrewAlphabet(inputText);

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          parsedText,
          info: INFO,
        }
      ),
    };
  } catch (e) {
    console.log(e);

    return {
      statusCode: 502,
      body: JSON.stringify(
        {
          message: GENERIC_ERROR,
          error: e.message,
          info: INFO,
        }
      ),
    };
  }
};
