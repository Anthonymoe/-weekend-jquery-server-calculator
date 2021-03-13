# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


#To Do

Stage 1: setup
    [x] git init
    [x] npm init --y
    [x] npm install express
    [x] add .gitignore
    [x] set up folders (server, server/public, etc...)
    [x] move over JQuery (server/public/vendors)
    [x] create html (server/public/)
    [x] create client.js (server/public/scripts)
    [x] create server.js (server)

Stage 2: spin up server
    edit server.js:
    [x] require express
    [x] create app
    [x] app.use express.static on server/public
    [x] spin up server on port 5000
    [x] add start script to package.json:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server.js"
  },

  Stage 3: the LOGIC
    [x] create a user interface with two input values
    [x] create  +, -, *, and / buttons positioned inbetween the inputs, 
        bonus: highlight currently selected operator button
    [] create an = button after the second input. when clicked capture user input and put into an object(store in an array.)
    [] send to server via POST
    [] create a 'C' button that clears/empties the input fields.

    [] create server side logic to compute answers
    [] send back ok (200)
    [] GET request after POST to get the solution

    []Keep a reocrd of all math operation and solutions on the DOM
        []**Think on this before getting started