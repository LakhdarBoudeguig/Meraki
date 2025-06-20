
// script.js

import Data from './data.js';

// Grab the button element
const button = document.getElementById('myButton');

// Create a dummy "instance" (can be anything, here just an object)
const myInstance = { message: 'Hello, I am bound to this button!' };

// Store it
Data.set(button, 'MyComponent', myInstance);

// Retrieve it
const retrieved = Data.get(button, 'MyComponent');

console.log('Retrieved Instance:', retrieved);

// Remove it
Data.remove(button, 'MyComponent');

console.log('After removal:', Data.get(button, 'MyComponent')); // should be null
