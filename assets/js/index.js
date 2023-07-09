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

// Function to handle swiping a dog
function swipeDog(hasBeenLiked) {
    // Checking if the dog has already been swiped
    if (!dog.hasBeenSwiped) {
        // Marking the dog as swiped and setting its liked status
        dog.hasBeenSwiped = true;
        dog.hasBeenLiked = hasBeenLiked;

        // Toggling the visibility of the 'like-badge' or 'nope-badge' based on the liked status
        dog.hasBeenLiked
            ? document.getElementById('like-badge').toggleAttribute('data-visible')
            : document.getElementById('nope-badge').toggleAttribute('data-visible');

        // Checking if there are more dogs in the array
        if (dogsArray.length > 0) {
            // Delaying the rendering of the next dog by 1500 milliseconds
            setTimeout(() => {
                // Getting the next dog and updating the 'dog' variable
                dog = getNextDog();
                // Rendering the updated dog
                render();
            }, 1500);
        } else {
            // Displaying a message when there are no more dogs
            endOfDogsMessage();
        }
    }
}

// Function to display a message when there are no more dogs
function endOfDogsMessage() {
    // Delaying the alert message by 1500 milliseconds
    setTimeout(() => {
        alert('No more dogs available in your area');
    }, 1500);
}

// Adding an event listener to the 'like-button' element
document.getElementById('like-button').addEventListener('click', () => {
    // Calling 'swipeDog' with the 'hasBeenLiked' parameter set to true
    swipeDog(true);
});

// Adding an event listener to the 'reject-button' element
document.getElementById('reject-button').addEventListener('click', () => {
    // Calling 'swipeDog' with the 'hasBeenLiked' parameter set to false
    swipeDog(false);
});

// Function to render the currently displayed dog
function render() {
    // Updating the HTML content of the 'dogs' element with the dog's HTML representation
    document.getElementById('dogs').innerHTML = dog.getDogHtml();
}

// Initial rendering of the first dog
render();
