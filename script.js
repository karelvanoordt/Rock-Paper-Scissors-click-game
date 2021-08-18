




let pcArray = ["rock", "paper", "scissors"]; // Here's the array with all the play alternatives

let pcChoice = pcArray[Math.floor(Math.random() * pcArray.length)]; // Computer's play, defined my a math 'random' operator




// Below are the variables that are going to serve as triggers for our game function
let playRock = document.getElementById('rock');
let playPaper = document.getElementById('paper');
let playScissors= document.getElementById('scissors');


//The trigger
playRock.addEventListener('click', game);
playPaper.addEventListener('click', game);
playScissors.addEventListener('click', game);


//The main game function
function game (){

    let userChoice = event.srcElement.id; // Here we capture the user's choice to compare with PC's later

alert("PC chose " + pcChoice); // The PC's play is revealed

//and later on the event result
if (pcChoice === userChoice) {
    alert ("it's a draw")
}  else if (pcChoice === "rock" && userChoice === "paper") {
    alert  ("You won! paper beats rock");
}  else if (pcChoice === "paper" && userChoice === "rock") {
    alert ("You lost! paper beats rock") ;     
}   else if (pcChoice === "rock" && userChoice === "scissors") {
    alert ("You lost! rock beats scissors");
}   else if (pcChoice === "scissors" && userChoice === "rock") {
    alert ("You won! rock beats scissors");
}   else if (pcChoice === "scissors" && userChoice === "paper") {
    alert ("You lost! scissors beats paper");
}   else if (pcChoice === "paper" && userChoice === "scissors") {
    alert ("You won! scissors beats paper")
}
    }




