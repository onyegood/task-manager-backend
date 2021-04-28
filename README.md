## Task Manager Pro Backend

Task manager is a simple to-do web app. There is no need for a login / register system. Any user who has access to the deployment
link [https://api-web-services.herokuapp.com/api/tasks] can perform any operation.

## Design Decisions

No authentication system implemented because the main goal of the project is to demostrate good knowledge and understanding of CRUD 

## Tool and external libraries used

NodeJS, Express, MongoDB, TypeScript, Jest, mongodb-memory-server, supertest, yarn 

## Deployment
Heroku, Heroku CLI and Git

## ENVIRONMENT VARIABLES
To run this projects on your local machine, create .env file in your root directory and add `MONGO_URI=YOUR_MONGO_URI_HERE` into it.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:5000/api/tasks](http://localhost:5000/api/tasks) to view it in the browser.

### `yarn test`
Launches the test runner in the interactive watch mode.