function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  console.log("1 = rock, 2 = paper, 3 = scissors");

  let inputValue = Number(prompt("1 = rock, 2 = paper, 3 = scissors. Input just a number"));

  if (Number.isInteger(inputValue) && inputValue >= 1 && inputValue <= 3) {
    return inputValue;
  }

  console.log("Please input 1, 2, or 3");
}


function playRound() {
  let round = 0;
  let humanScore = 0;
  let computerScore = 0;

  while (round < 5) {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      console.log("draw");
      round++;
      continue;
    }

    if (humanChoice === 1) {

      if (computerChoice === 3) {
        console.log("Human win");
        humanScore++;
      } else {
        console.log("Computer win");
        computerScore++;
      }

    } else if (humanChoice === 2) {

      if (computerChoice === 1) {
        console.log("Human win");
        humanScore++;
      } else {
        console.log("Computer win");
        computerScore++;
      }

    } else if (humanChoice === 3) {

      if (computerChoice === 2) {
        console.log("Human win");
        humanScore++;
      } else {
        console.log("Computer win");
        computerScore++;
      }

    }

    round++;
  }

  if (humanScore > computerScore) {
    console.log("Human Win");
  } else if (humanScore < computerScore) {
    console.log("Computer win");
  } else {
    console.log("draw match");
  }

  console.log("Human score:", humanScore);
  console.log("Computer score:", computerScore);
}

playRound();