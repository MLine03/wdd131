// Select elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener to the Add Chapter button
button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    // Create list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set the li content
    li.textContent = input.value;

    // Set the delete button properties
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Add delete button to li
    li.appendChild(deleteButton);

    // Add li to the list
    list.appendChild(li);

    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });

    // Clear the input field
    input.value = '';
  }

  // Always return focus to the input field
  input.focus();
});

