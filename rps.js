function getUserChoice() {
    var userInput = prompt('Rock, Paper, or Scissors?');
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error!');
        }
}
function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      console.log('Computer choice error');
                      }
}
function determineWinner(getUserChoice, computerChoice) {
  if (getUserChoice === 'bomb') {
    return 'The player has won';
  }
  if (getUserChoice === getComputerChoice) {
    return 'The game is a tie!';
  //Game is a tie
  }
  //first if statement
 if (getUserChoice === 'rock'){
   if (getComputerChoice === 'paper'){
     return 'The computer won!';
   }
   else{
     console.log('The player has won!');
   }
 }
  //second if statement
 if (getUserChoice === 'paper'){
   if (getComputerChoice === 'scissors'){
     return 'The computer won!';
   }
   else{
     console.log('The player has won!');
   }
 }
  //third if statement
  if (getUserChoice === 'scissors'){
    if (getComputerChoice === 'rock'){
      return 'The computer has won!';
      }
    else{
      console.log('The player has won!');
    }
    }
  //fourth if statement
  if (getUserChoice === 'bomb'){
    return 'the player has won!';
  }
}
function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  	console.log('The computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}


playGame();
