import dogsData from "./data.js";
import Dog from "./Dog.js";

// Creating a new array of dogs by creating new instances of dogs with the 'Dog' class
const dogsArray = dogsData.map((dog) => new Dog(dog));

// Variable to hold the currently displayed dog
let dog = getNextDog();

// Function to get the next dog from the array
function getNextDog() {
    // Removing the first dog from the array and storing it in 'nextDog'
    const nextDog = dogsArray.shift();
    // Returning the 'nextDog' if it exists, otherwise returning an empty object
    return nextDog ? nextDog : {};
}