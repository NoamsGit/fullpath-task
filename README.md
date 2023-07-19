# English Words Sorter
## Fullpath task
This is a simple Node.js application, deployed via the [Serverless Framework](https://www.serverless.com/) on AWS, that sorts English words based on the order of the Hebrew alphabet.

## Endpoint
The application is accessible publicly via the following endpoint: [https://ae1jpvxt67.execute-api.us-east-1.amazonaws.com/parse](https://ae1jpvxt67.execute-api.us-east-1.amazonaws.com/parse)
This endpoint accepts `POST` requests with a JSON body in the format `{ text: <input> }`, where `<input>` is a string of English words separated by spaces, commas, or newline characters.

## Project structure
- **parser.js**: This is the main handler for our AWS Lambda function. It handles incoming requests, parses the body, and responds with either a sorted string or an error message.
- **utils/utils.js**: This module contains the main function that sorts the English words according to the Hebrew alphabet.
- **utils/utils.test.js**: This module contains the tests for our sorting function.

## How it works
1. The application accepts JSON input in the format `{ text: <input> }`, where `<input>` is a string of English words separated by spaces, commas, or newline characters.
1. The application sorts the words in `<input>` based on the order of the Hebrew alphabet.
1. The application responds with a JSON object containing the sorted string and some additional information.
If there's an error (e.g., the input is not a string), the application responds with a JSON object containing an error message and some additional information.

## Running tests
To run the tests for the sorting function, navigate to the root directory of the project and run the following command: `npm test`
This will run all the test cases defined in **utils/utils.test.js**.

## Error Handling
The application responds with an HTTP status code of `502` and an error message if there's an error while processing the request. The error message is in the format:<br/>
`{`<br/>`
  "message": "Something went wrong, please contact the developer.",`<br/>`
  "error": "<Error details>",`<br/>`
  "info": "<Additional information>"`<br/>`
}`<br/>
The `<Error details>` placeholder will contain a description of the error.

## Deployment
The application is deployed on AWS Lambda using the Serverless Framework. The **serverless.yml** configuration file in the root directory of the project contains the details of the deployment configuration.
