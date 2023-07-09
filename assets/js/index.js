import dogsData from "./data.js";
import Dog from "./Dog.js";

// Creating a new array of dogs by creating new instances of dogs with the 'Dog' class
const dogsArray = dogsData.map((dog) => new Dog(dog));