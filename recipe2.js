console.log("Let's cook some pasta 🍝");

// We can change these values, the algorithm will
// still work and compute the same result,
// but with different inputs.
let pasta = 100;
let water = 1000;

// After we cook the pasta, 10% of the water
// will be absorbed by the pasta, so the weight
// of the pasta after cooking will be
// the pasta weight plus 10% of the water weight.

let sauce = 100;

console.log("Here are our ingredients:");
console.log("Pasta:", pasta);
console.log("Water:", water);
console.log("Sauce:", sauce);

console.log("Cooking the pasta...");
pasta += water * 0.1;
// ^ 10% of the value inside water

console.log("Pasta is cooked. Now its weight is:", pasta);

// We want to take the pasta & sauce
// & mix them into a dish - a new container

// This would work if we want to leave pasta in the same container
// pasta += sauce

let dish = pasta + sauce;
console.log("Here's my final dish:", dish);
