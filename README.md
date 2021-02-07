# ROLI Platform Developer Tech Task

A simple React and Node.js application that acts as a file browser for a ​private​ AWS S3 bucket.
The server code is written in Node, client code in React, all with babel support for ES6+ support.
External npm packages used:

-   `react-bootstrap` && `bootstrap` && `js-file-download`
-   `express` && `cors` && `@aws-sdk/client-s3`

Dev/Test dependencies:

-   `jest` && `enzyme`
-   `supertest` && `nodemon`

## Prerequisite

You must have the AWS access keys (`ACCESS_KEY_ID` & `SECRET_ACCESS_KEY`) & region string (suck as `eu-west-2`) for the AWS S3 bucket you want to browse.
e.g:

-   accessKey: `AKIAUK6SA3S7UCBQ6OYB`
-   secretKey: `J9LZcMj5I/TfXUy+d1aqk5tFXxbUyGL3hzNoVHE5`
-   region: `eu-west-2`

You will need to fill in the form with these 3 keys when you open your client app to connect to AWS S3 service to view the buckets.

## Quick Start

Start from the root directory (where this README is, not inside `server` or `client` folder). First you should install and start the server, following commands:

-   `cd server`
-   `npm install`
-   `npm start`

the server by default running at port `5000`, so please make sure the port if free to use.

Then open another terminal from the root directory, you can install and start the client, following commands:

-   `cd client`
-   `yarn install`
-   `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Test

To test the server, following commands (from root directory):

-   `cd server`
-   `npm test`

To test the client, following commands (from root directory):

-   `cd client`
-   `yarn test`

## To-Do List

-   Better error handling throughout the code, especially with failed AWS Access Keys inputs.
-   Implement secure way to handle AWS SDK keys
-   More unit tests for the client && server
-   React app state management re-write using `useContext`, `useReducer`
-   Extra features, such as creating new bucket and etc.
