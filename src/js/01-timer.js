import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

// Ініціалізація flatpickr на полі вводу
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

let countdownInterval;

// Функція для запуску відліку часу
function startCountdown() {
  const userSelectedDate = new Date(datetimePicker.value).getTime();
  const currentDate = new Date().getTime();
  const timeDifference = userSelectedDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    alert('Timer has ended!');
    startButton.disabled = true;
    return;
  }

  updateTimerUI(timeDifference);

  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const newTimeDifference = userSelectedDate - currentTime;

    if (newTimeDifference <= 0) {
      clearInterval(countdownInterval);
      alert('Timer has ended!');
      startButton.disabled = true;
      return;
    }

    updateTimerUI(newTimeDifference);
  }, 1000);
}

// Функція для оновлення інтерфейсу таймера
function updateTimerUI(timeDifference) {
  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  daysElement.innerText = addLeadingZero(days);
  hoursElement.innerText = addLeadingZero(hours);
  minutesElement.innerText = addLeadingZero(minutes);
  secondsElement.innerText = addLeadingZero(seconds);
}

// Функція для додавання ведучого нуля до числа, якщо воно менше 10
function addLeadingZero(value) {
  return value < 10 ? `0${value}` : `${value}`;
}

// Функція для перетворення мілісекунд у об'єкт {дні, години, хвилини, секунди}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Обробник натискання кнопки "Start"
startButton.addEventListener('click', () => {
  startCountdown();
  startButton.disabled = true;
});