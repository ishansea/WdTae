const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;

checkButton.addEventListener("click", () => {
  chance--;
  let inputValue = input.value;
  if (inputValue == randomNum) {
    [guess.textContent, input.disabled] = ["Congratulations", true];
  } else if (inputValue > randomNum && inputValue < 100) {
    [guess.textContent, remainChances.textContent] = [
      "thoda kam socho",
      chance
    ];
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = [
      "thoda bada socho",
      chance
    ];
  } else {
    [guess.textContent, remainChances.textContent] = [
      "Your number is invalid",
      chance
    ];
  }
  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = [
      "Replay",
      true,
      ""
    ];
    [guess.textContent, guess.style.color] = ["You lost the game", "#000000"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});
