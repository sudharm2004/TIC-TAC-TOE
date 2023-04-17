let sign = null;
console.log("1");

const boxes = document.getElementsByClassName("box");

console.log(boxes[0]);
console.log(boxes.length);

for (let index = 0; index < boxes.length; index++) {
  boxes[index].addEventListener("click", (event) => {
    if (sign == null || sign == "x") {
      event.target.classList.add("o-sign");
      sign = "o";
    } else {
      event.target.classList.add("x-sign");
      sign = "x";
    }
  });
}

const restartBtn = document.querySelector(".button");
restartBtn.addEventListener("click", (event) => {
  for (let index = 0; index < boxes.length; index++) {
    boxes[index].classList.remove("o-sign");
    boxes[index].classList.remove("x-sign");
  }
});
