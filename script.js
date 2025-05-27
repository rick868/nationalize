const nameInput = document.getElementById('name');
const resultsDiv = document.getElementById('results');
const submitButton = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const nameForm = document.getElementById('name-form');

nameForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = nameInput.value();
    
