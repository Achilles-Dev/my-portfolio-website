/* Contact form email validation */
const contactForm = document.querySelector('#contact-me');

const EMAIL_ERROR_MESSAGE = 'Form not Submitted. Email Address must be in lowercase! Enter valid Email!';

const showErrorMessage = (inputValue, message, type) => {
  const emailMessage = inputValue.parentNode.querySelector('span');
  emailMessage.textContent = message;
  if (type === true) {
    emailMessage.className = 'success';
  } else if (type === false) {
    emailMessage.className = 'error';
  }
  return type;
};

const validateEmail = (inputValue, message) => {
  const email = inputValue.value.trim();
  if (email !== email.toLowerCase()) {
    return showErrorMessage(inputValue, message, false);
  }
  return true;
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = contactForm.elements.email;
  const validEmail = validateEmail(emailInput, EMAIL_ERROR_MESSAGE);
  if (validEmail) {
    contactForm.submit();
  }
});