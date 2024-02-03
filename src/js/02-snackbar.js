import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function createPromise(delay, state) {
  if (isNaN(delay) || state === '')
    return console.error('Введені невалідні значення');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();

  const delayInput = document.querySelector('[name = "delay"]');
  const stateInput = document.querySelector('[name = "state"]');

  const delay = delayInput.value;
  const state = e.target.elements.state.value;

  createPromise(delay, state)
    .then(result => {
      // console.log(`✅ Fulfilled promise in ${result}ms`);
      iziToast.show({
        title: '',
        message: '✅ Fulfilled promise in ${result}ms',
        color: 'green',
        position: 'topRight',
      });
    })
    .catch(error => {
      // console.log(`❌ Rejected promise in ${error}ms`);
      iziToast.show({
        title: '',
        message: '❌ Rejected promise in ${error}ms',
        color: 'red',
        position: 'topRight',
      });
    });
});
