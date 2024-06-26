// DETECTING BUTTONS

const buttons = document.querySelectorAll(".drum");
const currentYear = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerText = `© ${currentYear}. All Rights Reserved.`;

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// DETECTING KEYBOARD PRESS

document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

const makeSound = function (key) {
  switch (key) {
    case "w":
      let tom1 = new Audio(`sounds/tom-1.mp3`);
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio(`sounds/tom-2.mp3`);
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio(`sounds/tom-3.mp3`);
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio(`sounds/tom-4.mp3`);
      tom4.play();
      break;

    case "j":
      let snare = new Audio(`sounds/snare.mp3`);
      snare.play();
      break;

    case "k":
      let crash = new Audio(`sounds/crash.mp3`);
      crash.play();
      break;

    case "l":
      let kick = new Audio(`sounds/kick.mp3`);
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
};

const buttonAnimation = function (currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
};
