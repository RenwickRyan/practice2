Rock, Paper, Scissors (JavaScript)

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error!')
  }
}

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
      return 'rock';
    } else if (randomNum === 1) {
      return 'paper'
    } else {
      return 'scissors'
    }
};

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === 'bomb') {
    return 'User Wins BOOOOOOM!';
  }

  if (userChoice === computerChoice) {
    return 'We Tied';
  };

  if (userChoice === 'rock'); {
    if (computerChoice === 'paper') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON !';
    }
  };

  if (userChoice === 'paper'); {
    if (computerChoice === 'scissors') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON !';
    }
  };

  if (userChoice === 'scissors'); {
    if (computerChoice === 'rock') {
      return 'COMPUTER WON !';
    } else {
      return 'USER WON !';
    }
  };
};

const playGame = () => {

  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

console.log(determineWinner(userChoice, computerChoice));

}

playGame();
