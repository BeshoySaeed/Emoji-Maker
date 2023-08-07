// manage color button

let colorBtn = document.querySelector(".colors");
let ourEmoji = document.querySelector(".emoji");

// array of colors

let colorArr = [" rgb(243, 180, 64)", "red", "orange", "yellow", "blue"];
let i = 0;

colorBtn.addEventListener("click", () => {
  if (i >= colorArr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  ourEmoji.style.backgroundColor = colorArr[i];
});

// eyes manage

let eyeBtn = document.querySelector(".eyes");
let firstEye = document.getElementById("first");
let secondEye = document.getElementById("second");

// eyes array

let eyesArr = [
  ["eyess", "eyess2"],
  ["cross", "cross2"],
];
let x = 0;
eyeBtn.addEventListener("click", () => {
  if (x >= eyesArr.length - 1) {
    x = 0;
  } else {
    x++;
  }
  firstEye.className = eyesArr[x][0];
  secondEye.className = eyesArr[x][1];
});

// eyebrows manage

let browsBtn = document.querySelector(".eyebrows");
let firstBrow = document.getElementById("first-brow");
let secondBrow = document.getElementById("second-brow");

// eyebrows array

let browsArr = [
  ["eyeBrowss", "eyeBrowss2"],
  ["rev", "rev2"],
];

let y = 0;

browsBtn.addEventListener("click", () => {
  if (y >= browsArr.length - 1) {
    y = 0;
  } else {
    y++;
  }
  firstBrow.className = browsArr[y][0];
  secondBrow.className = browsArr[y][1];
});

// mouth manage

let mouthBtn = document.querySelector(".Mouth");
let mouth = document.getElementById("mouth-draw");

// mouse array

let mouthArr = ["mouths", "mouths2", "mouths3"];

let j = 0;

mouthBtn.addEventListener("click", () => {
  if (j >= mouthArr.length - 1) {
    j = 0;
  } else {
    j++;
  }

  mouth.className = mouthArr[j];
});
