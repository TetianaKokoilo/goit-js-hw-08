import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

feedbackForm.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', throttle(onTextareaInput, 500));
messageInput.addEventListener('input', throttle(onTextareaInput, 500));

const LOCALSTORAGE_KEY = 'feedback-form-state';


populateForm();

function onTextareaInput() {
  const formData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
  console.log(savedMessage);

  evt.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

    messageInput.value = savedMessage.message || '';
    emailInput.value = savedMessage.email || '';
  }
}












































