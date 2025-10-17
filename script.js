// Select DOM elements
const nameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Function to display name
function displayStoredName() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        displayName.textContent = `Hello, ${savedName}! 👋`;
    } else {
        displayName.textContent = '';
    }
}

// Save name to localStorage
saveBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        displayStoredName();
        nameInput.value = '';
    } else {
        alert('Please enter your name before saving.');
    }
});

// Clear name from localStorage
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('userName');
    displayStoredName();
});

// Display name when page loads
window.addEventListener('load', displayStoredName);
