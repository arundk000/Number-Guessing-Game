let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct Number🎉";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "300px";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "💹Too high";
    } else {
      document.querySelector(".message").textContent = "you lost the game💥";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "💹Too Low";
    } else {
      document.querySelector(".message").textContent = "you lost the game💥";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "start guessing.🤔";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.width = "150px";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
});
