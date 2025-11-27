// Get the form element
const form = document.querySelector('form');

// Listen for when someone clicks submit
form.addEventListener('submit', function(e) {
  // Stop the form from actually submitting
  e.preventDefault();
  
  // Get the user's name
  const name = document.getElementById('name').value;
  
  // Show a personalized message
  alert(`Thank you for registering, ${name}! This is a demo form, so your information was not actually sent.`);
  
  // Clear the form after submission
  form.reset();
});