let sign = null;
let cellDimension = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

document.addEventListener("DOMContentLoaded", (documentEvent) => {
  //getting parent div of restart button and making its display hide
  const restartBtnDiv = document.querySelector(".restart-btn-container");
  restartBtnDiv.classList.add("hide");
  //getting the all boxes
  const boxes = document.getElementsByClassName("box");

  const handleBoxClick = (event) => {
    console.log("Event fired");
    //to check that clicked element does not have X as well as O
    let x = event.target.id.slice(4, 5);
    let y = event.target.id.slice(-1);

    //If after clicking on the tic-toc-toe box sign(variable that represent is it turn for X or O) is checked to decide current player(X or O) if previous value was x print o or else print x and also change value of sing
    if (sign == null || sign == "x") {
      event.target.classList.add("o-sign");
      cellDimension[x][y] = "O";
      sign = "o";
    } else {
      event.target.classList.add("x-sign");
      cellDimension[x][y] = "X";
      sign = "x";
    }
    //Displaying The restart button once user starts playing(That is clicks first time)
    restartBtnDiv.classList.remove("hide");

    checkWinningFinalCondition();
    event.target.removeEventListener("click", handleBoxClick);
    event.target.style.cursor = "not-allowed";
  };

  //applying onclick event on all classes selected above using for loop
  for (let index = 0; index < boxes.length; index++) {
    //for each element
    boxes[index].addEventListener("click", handleBoxClick);
  }

  //Code for restarting the game
  const restartBtn = document.getElementById("restart-btn");

  //function to restart the game
  const restartGame = () => {
    for (let index = 0; index < boxes.length; index++) {
      console.log(boxes[index]);
      boxes[index].classList.remove("o-sign");
      boxes[index].classList.remove("x-sign");
      boxes[index].classList.remove("column-strike");
      boxes[index].classList.remove("row-strike");
      boxes[index].classList.remove("diagonal-strike");
      boxes[index].addEventListener("click", handleBoxClick);
      boxes[index].style = "";
      boxes[index].style.cursor = "pointer";
      const winner = document.querySelector(".winner");
      // winner.innerHTML = "";
      winner.style.opacity = 0;
    }
    restartBtnDiv.classList.add("hide");
    cellDimension = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  };
  restartBtn.addEventListener("click", restartGame);

  //Code for winning the game
  const checkWinningFinalCondition = () => {
    if (
      cellDimension[0][0] == cellDimension[1][1] &&
      cellDimension[0][0] == cellDimension[2][2] &&
      cellDimension[0][0] != null
    ) {
      finishGame("left-diagonal", [1, 1]);
      return;
    }
    if (
      cellDimension[0][2] == cellDimension[1][1] &&
      cellDimension[0][2] == cellDimension[2][0] &&
      cellDimension[0][2] != null
    ) {
      finishGame("right-diagonal", [1, 1]);
      return;
    }
    for (let i = 0; i < 3; i++) {
      let rowWinner = 0;
      let colWinner = 0;
      for (let j = 0; j < 3; j++) {
        rowWinner = 0;
        colWinner = 0;
        for (let col = 0; col < 3; col++) {
          if (
            cellDimension[i][j] == cellDimension[i][col] &&
            cellDimension[i][j] != null
          ) {
            rowWinner++;
          }
        }
        for (let row = 0; row < 3; row++) {
          if (
            cellDimension[i][j] == cellDimension[row][i] &&
            cellDimension[i][j] != null
          ) {
            colWinner++;
          }
        }

        //Break out of the loop if a whole column or row is same
        if (rowWinner == 3 || colWinner == 3) {
          finishGame(rowWinner == 3 ? "row" : "col", [i, j]);
          break;
        }
      }
      //Break out of the loop if a whole column or row is same
      if (rowWinner == 3 || colWinner == 3) {
        break;
      }
    }
  };

  //code for finishing the game
  const finishGame = (track, dim) => {
    console.log(dim);
    console.log(track);
    if (track == "row") {
      if (dim[0] == 0) {
        const box1 = document.getElementById(`box-0-0`);
        box1.classList.add("row-strike");
        setTimeout(() => {
          box1.style.setProperty("--rowOpacity", "1");
          box1.style.setProperty("--rowWidth", "300px");
        }, 500);
      } else if (dim[0] == 1) {
        const box2 = document.getElementById(`box-1-0`);
        box2.classList.add("row-strike");
        setTimeout(() => {
          box2.style.setProperty("--rowOpacity", "1");
          box2.style.setProperty("--rowWidth", "300px");
        }, 500);
      } else {
        const box3 = document.getElementById(`box-2-0`);
        box3.classList.add("row-strike");
        setTimeout(() => {
          box3.style.setProperty("--rowOpacity", "1");
          box3.style.setProperty("--rowWidth", "300px");
        }, 500);
      }
    } else if (track == "left-diagonal") {
      const box1 = document.getElementById(`box-0-0`);
      box1.classList.add("diagonal-strike");
      setTimeout(() => {
        box1.style.setProperty("--diaAngle", "rotate(45deg)");
        box1.style.setProperty("--diaOpacity", "1");
        box1.style.setProperty("--diaWidth", "437px");
      }, 500);
    } else if (track == "right-diagonal") {
      const box3 = document.getElementById(`box-0-2`);
      box3.classList.add("diagonal-strike");
      setTimeout(() => {
        box3.style.setProperty("--diaLeft", "96px");
        box3.style.setProperty("--diaAngle", "rotate(135deg)");
        box3.style.setProperty("--diaOpacity", "1");
        box3.style.setProperty("--diaWidth", "440px");
      }, 500);
    } else {
      console.log("column");
      console.log("dim[1]", dim[1]);
      if (dim[1] == 0) {
        const box1 = document.getElementById(`box-0-0`);
        box1.classList.add("column-strike");
        setTimeout(() => {
          box1.style.setProperty("--colOpacity", "1");
          box1.style.setProperty("--colWidth", "300px");
        }, 500);
      } else if (dim[1] == 1) {
        const box2 = document.getElementById(`box-0-1`);
        box2.classList.add("column-strike");
        setTimeout(() => {
          box2.style.setProperty("--colOpacity", "1");
          box2.style.setProperty("--colWidth", "300px");
        }, 500);
      } else {
        const box3 = document.getElementById(`box-0-2`);
        box3.classList.add("column-strike");
        setTimeout(() => {
          box3.style.setProperty("--colOpacity", "1");
          box3.style.setProperty("--colWidth", "300px");
        }, 500);
      }
    }
    //Code to print who won the game
    if (cellDimension[dim[0]][dim[1]] == "X") {
      const winner = document.querySelector(".winner");
      winner.innerHTML = "X Wins!!(Restart Game)";
      winner.style.opacity = 1;
    } else {
      const winner = document.querySelector(".winner");
      winner.innerHTML = "O Wins!!(Restart Game)";
      winner.style.opacity = 1;
    }
    //Code to remove all eventlisteners and make the boxes unclickable
    for (let index = 0; index < boxes.length; index++) {
      boxes[index].removeEventListener("click", handleBoxClick);
      boxes[index].style.cursor = "not-allowed";
    }
  };
});
