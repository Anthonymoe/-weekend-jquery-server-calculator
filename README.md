# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

For this problem I created a Server Side Calculator. In order to accomplish this task I took user inputs and POSTED them to a route in my server. When the route received new objects it used that information as arguments to calculate the solution. The information was then pushed to the DOM including the newly found solution based on the inputs. I then ran a GET request and looped through the array to append all results to the DOM. 

- HTML
- javaScript
- jQuery
- node
- express
- css(barely)

<img src="file:///Users/anthonymoe/Desktop/Screen%20Shot%202021-03-14%20at%2012.09.57%20PM.png" width="200" > </img>

### Thank You

Thank you to Prime Digital Academy for showing me the way.


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
    [x] create an = button after the second input. when clicked capture user input and put into an object(store in an array.)
    [x] send to server via POST
    [x] create a 'C' button that clears/empties the input fields.

    [x] create server side logic to compute answers
    [x] send back ok (200)
    [x] GET request after POST to get the solution

    [x]Keep a reocrd of all math operation and solutions on the DOM
        []**Think on this before getting started