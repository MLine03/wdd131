// Select elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// DOM Manipulation (no event listeners yet)

// Create list item and delete button as an example
const li = document.createElement('li');
const deleteButton = document.createElement('button');

// Set li text from input value
li.textContent = input.value;  // Note: value is empty initially

// Setup delete button
deleteButton.textContent = '❌';
deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

// Append button to list item
li.append(deleteButton);

// Append list item to list
list.append(li);
