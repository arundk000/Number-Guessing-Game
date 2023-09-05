'use script';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// click event

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'correct Number✔';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
  }
});
