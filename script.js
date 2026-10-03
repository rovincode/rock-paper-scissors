
let computerScoreDisplay = document.getElementById("computer-score");
let humanScoreDisplay = document.getElementById("human-score");
let pressButton = document.getElementsByClassName("player-choices");
let commentDisplay = document.getElementById("comment");


function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

// function getHumanChoice() {

//   let inputValue = pressButton.value;

//   if (Number.isInteger(inputValue)) {
//     return inputValue;
//   }
// }

let round = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {


  if (round < 5) {

    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      commentDisplay.innerHTML = "DRAW";
      round++;
    } else {
      if (humanChoice === 1) {

        if (computerChoice === 3) {
          commentDisplay.innerHTML = "Human Win";
          humanScore++;
          humanScoreDisplay.innerHTML = humanScore;
        } else {
          commentDisplay.innerHTML = "computer Win";
          computerScore++;
          computerScoreDisplay.innerHTML = computerScore;
        }

      } else if (humanChoice === 2) {

        if (computerChoice === 1) {
          commentDisplay.innerHTML = "Human Win";
          humanScore++;
          humanScoreDisplay.innerHTML = humanScore;
        } else {
          commentDisplay.innerHTML = "computer Win"
          computerScore++;
          computerScoreDisplay.innerHTML = computerScore;
        }

      } else if (humanChoice === 3) {

        if (computerChoice === 2) {
          commentDisplay.innerHTML = "Human Win";
          humanScore++;
          humanScoreDisplay.innerHTML = humanScore;
        } else {
          commentDisplay.innerHTML = "computer Win";
          computerScore++;
          computerScoreDisplay.innerHTML = computerScore;
        }

      }

      round++;

    }


  } else {

    if (humanScore > computerScore) {
      commentDisplay.innerHTML = "Round Done. Human Win";
    } else if (humanScore < computerScore) {;
      commentDisplay.innerHTML = "Round Done. Computer Win";
    } else {
      commentDisplay.innerHTML = "Round Done. Draw";
    }

  }


}
