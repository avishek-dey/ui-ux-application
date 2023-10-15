const checkbox = document.querySelector('.checkbox-wrapper-2');
const button = document.querySelector('.submit-button');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'disabled');
  }
});

button.addEventListener('click', function() {
  if (checkbox.checked) {
    // Perform your button click action here
    alert('Button clicked!');
  }
});
