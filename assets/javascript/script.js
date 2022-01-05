//Options for the game.
const gameArray = ["R", "P", "S"];

//Initialize wins, losses and ties.
let wins = 0;
let losses = 0;
let ties = 0;

alert("Let's play Rock, paper or scissors!");

function playGame() 
{
    //Prompts user to enter their choice.
    let userChoice = prompt("Enter your choice rock(R), paper(P) or scissors(S)", "R");

    //If user cancels, return from the function.
    if (!userChoice) 
    {
        return;
    }

    //Gets a random number between 0 and 2
    let index = Math.floor(Math.random() * gameArray.length);
    //The computer choice is set based on the index.
    let computerChoice = gameArray[index];
    //Shows the computer choice to the user.
    alert("Computer selected " + computerChoice);
    /* Converts user choice to uppercase as all options in gameArray is in uppercase. 
     It will be easier for comparion. */
    userChoice = userChoice.toUpperCase();

    //If user enters anything other than R,P or S
    if (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") 
    {
        alert("You entered the wrong choice.");
    }
    //If computer choice is same as computer choice
    else if (userChoice === computerChoice) 
    {
        ties++;
        alert("It's a tie.");
    }
    //Winning condition
    else if ((userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")) 
    {
        wins++;
        alert("Wow! You won!");
    }
    else
    {
        //Everything else is a loss.
        losses++;
        alert("You lost!");
    }

    //Display the results
    alert("Results: \nWins = " + wins + "\nLosses = " + losses + "\nTies = " + ties);

    //Asks the user if they want to play again
    let playAgainChoice = confirm("Do you want to play again?");
    if(playAgainChoice)
    {
        //If user wants to play again, calls the function again.
        playGame();
    }
}

//Calls the function.
playGame();


