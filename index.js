let sign = null;

document.addEventListener("DOMContentLoaded", (documentEvent) => {
  //getting parent div of restart button and making its display hide
  const restartBtnDiv = document.querySelector(".restart-btn-container");
  console.log(restartBtnDiv);
  restartBtnDiv.classList.add("hide");
  //getting the all boxes
  const boxes = document.getElementsByClassName("box");

  const handleBoxClick = (event) => {
    //to check that clicked element does not have X as well as O
    if (
      !event.target.classList.contains("o-sign") &&
      !event.target.classList.contains("x-sign")
    ) {
      //If after clicking on the tic-toc-toe box sign(variable that represent is it turn for X or O) is checked to decide current player(X or O) if previous value was x print o or else print x and also change value of sing
      if (sign == null || sign == "x") {
        event.target.classList.add("o-sign");
        sign = "o";
      } else {
        event.target.classList.add("x-sign");
        sign = "x";
      }
      restartBtnDiv.classList.remove("hide");
    }
  };

  //applying onclick event on all classes selected above using for loop
  for (let index = 0; index < boxes.length; index++) {
    //for each element
    boxes[index].addEventListener("click", handleBoxClick);
  }

  //Code for wining the game

  //Code for restarting the game
  const restartBtn = document.getElementById("restart-btn");

  const restartGame = () => {
    for (let index = 0; index < boxes.length; index++) {
      boxes[index].classList.remove("o-sign");
      boxes[index].classList.remove("x-sign");
    }
    restartBtnDiv.classList.add("hide");
  };

  restartBtn.addEventListener("click", restartGame);
});
