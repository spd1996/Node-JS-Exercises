// 9. Express File handling:
// a. Set up a simple Express server that serves a static HTML file named 'index.html' when accessing the root URL.
// b. Create a directory named 'public' and place the 'index.html' file inside it.
// c. Use Express to serve the static files in the 'public' directory. Test accessing the HTML file in a web browser.

// Ans---> Added public folder which contains static html,css javascript files and added app.use(express.static(path.join(__dirname, 'public'))); in app.js

// 10. Create a Node.js application that simulates a banking system. 
// Implement an EventEmitter to handle banking transactions such as deposits, withdrawals, and transfers. 
// Whenever a transaction occurs, emit an event and notify the user with the transaction details (e.g., amount, transaction type, account balance).

// Ans---> Added banking folder in root and registered it in app.js as an url

// 11. Develop a Node.js application to simulate an insurance claim processing system. 
// Use EventEmitter to manage the different stages of a claim (e.g., claim filed, under review, approved, rejected).
// Emit events for each stage and log the progression of the claim.

// Ans---> Added claims folder in root and registered it in app.js as an url


// As this file does not contain any javascript code i will add a bonus question
// Pls write the output of the code below
var variable = 10 ;
(() => {

    console.log(variable)
    variable = 20
    console.log(variable)

})();
console.log(variable)
var variable = 30

// Using .call() for Method Borrowing

const person = {
    name: "Alice",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const anotherPerson = {
    name: "Bob"
  };
  
  person.greet.call(anotherPerson);

  // execution context .bind  ---> note that .bind returns a function but .call does not

  const suraj = {
    name: "Suraj Prakash",
    sayName: function() {
        console.log(this.name)
    }
  }

setTimeout(() =>{
    suraj.sayName.bind(person)()
}, 2000);

// question on objects

const object = {
    height: 30
}

console.log(object.height)

delete object.height

console.log(object.height)