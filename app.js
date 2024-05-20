let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const resetButton = document.getElementById('play-again');
const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};
const drawGame = () =>{
    console.log("its a tie");
    msg.innerText = "It's a draw!"
    msg.style.backgroundColor = 'red'; // Set the background color to red
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        compScore = compScore ;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        console.log("you win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = 'green'; // Set the background color to green
       
    }else{
        compScore++;
        userScore = userScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        console.log("you lose!");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = 'red'; // Set the background color to red
    }
    // Update the score display
  document.getElementById('user-score').innerText = ` ${userScore}`;
  document.getElementById('comp-score').innerText = ` ${compScore}`;
};

const playGame =(userChoice) =>{
    console.log("user choice=",userChoice);
    //generate computers choice
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);
    //to print result statement
    if(userChoice === compChoice){
        console.log("ita draw!");
        msg.innerText = "It's a tie! play again."
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
            
           
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
           
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
showWinner(userWin, userChoice, compChoice);
        }
    };


choices.forEach((choice) =>
{
    choice.addEventListener("click",() => {
    
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = () => {
    // Reset the scores
    document.getElementById('user-score').innerText = ` ${0}`;
  document.getElementById('comp-score').innerText = ` ${0}`;
  
    // Reset the message
   msg.innerText = "Let's :) Play again!"
  
    // Reset the cells
    cells.forEach(cell => cell.classList.remove('x', 'o'));
  
    // Reset the current player
    currentPlayer = 'x';
  };
  resetButton.addEventListener('click', resetGame);

     



  