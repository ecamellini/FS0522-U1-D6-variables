// This is a comment...
// Comments have no effect on the code, they are just some
// comments written by developers, for developers.
// Which developers? Coworkers, or yourlself in the future, when you go back to this code.

/* Everything after this i a comment, multiple lines...
this is again the same comment...
until we write */

console.log("Welcome to the programming kitchen.");
console.log("We're going to bake some cookies 🍪");

let sugar = 80;
let butter = 120;
let flour = 200;
let chocolate = 20;

console.log("Here are our ingredients:");
console.log("Sugar:", sugar);
console.log("Butter:", butter);
console.log("Flour:", flour);

let mediumBowl;
mediumBowl = butter + sugar;

console.log("We mixed together butter & sugar:");
console.log("Content of medium bowl:", mediumBowl);

mediumBowl += flour + chocolate;
// ^^ This is just another way to write the following instruction:
// mediumBowl = mediumBowl + flour + chocolate

console.log("We also added flour & chocolate...");
console.log("Now the content is:", mediumBowl);

console.log("Now we want to empty the medium bowl...");
mediumBowl = null;
console.log("Now the content of medium bowl is:", mediumBowl);
