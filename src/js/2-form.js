let formData = { email: '', message: '' };
const feedbackForm = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  feedbackForm.elements.email.value = parsedData.email || '';
  feedbackForm.elements.message.value = parsedData.message || '';
  formData = parsedData;
}

feedbackForm.addEventListener('input', inputFeedback);

function inputFeedback(evt) {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', checkFill);
function checkFill(evt) {
  evt.preventDefault();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
  } else {
    console.log({ email, message });
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
    formData = { email: '', message: '' };
  }
}
