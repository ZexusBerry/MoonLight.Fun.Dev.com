// script.js
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    checkLoginStatus();
  }, 2000); // Simulate loading time
});

function showRegister() {
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('mainContent').classList.add('hidden');
}

function checkLoginStatus() {
  const userData = getCookie('user');
  if (userData) {
    // If user is logged in
    document.getElementById('registerTab').style.display = 'none';
    // Show the main content
  } else {
    // If user is not logged in, show the register button
    document.getElementById('registerTab').style.display = 'inline-block';
  }
}

function handleButtonClick(item) {
  const userData = getCookie('user');
  if (!userData) {
    alert('Please register or log in first!');
    showRegister();
    return;
  }
  // Handle get button functionality based on the item
  alert(`Getting ${item}...`);
}

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Save user data as cookies
  document.cookie = `user=${username}; path=/`;
  
  // Save in a simulated database (for example purposes)
  alert('Registration successful!');
  
  // Redirect to the main content
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('mainContent').classList.remove('hidden');
}

// Helper function to get cookies
function getCookie(name) {
  let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}
