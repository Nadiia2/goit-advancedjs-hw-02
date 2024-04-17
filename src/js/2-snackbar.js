import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();

  const delayInput = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const makePromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(`✅ Fulfilled promise in ${delayInput}ms`);
        }
        reject(`❌ Rejected promise in ${delayInput}ms`);
      }, delayInput);
    });
  };

  makePromise()
    .then(state => {
      console.log(state);
      iziToast.success({
        message: `${state}`,
        position: 'topCenter',
      });
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message: `${error}`,
        position: 'topCenter',
      });
    });

  setTimeout(() => {
    event.target.reset();
  }, 0);
}
