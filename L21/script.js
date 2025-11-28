const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form submission

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.style.display = 'block';
    valid = false;
  } else {
    nameError.style.display = 'none';
  }

  // Email validation
  if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
    emailError.style.display = 'block';
    valid = false;
  } else {
    emailError.style.display = 'none';
  }

  // Password validation
  if (passwordInput.value.length < 8) {
    passwordError.style.display = 'block';
    valid = false;
  } else {
    passwordError.style.display = 'none';
  }

  if (valid) {
    alert('Registration successful!');
    form.reset(); // clear the form
  }
});

// Real-time validation as user types
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() !== '') nameError.style.display = 'none';
});

emailInput.addEventListener('input', () => {
  if (emailInput.value.includes('@')) emailError.style.display = 'none';
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length >= 8) passwordError.style.display = 'none';
});
