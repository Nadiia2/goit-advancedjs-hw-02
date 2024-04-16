const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');

const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (formData) {
  email.value = formData.email || '';
  message.value = formData.message || '';
}

form.addEventListener('input', function () {
  const setData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(setData));
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Будь ласка, заповніть всі поля форми.');
    return;
  }

  const setData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  console.log(setData);
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
});
