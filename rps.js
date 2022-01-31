const rpsOptions = ['paper', 'rock', 'scissors'];

function playRound(playerSelection){
    while (!rpsOptions.includes(playerSelection)){
        prompt("Rock, Paper, or Scissors?").toLowerCase();
    }

    playerIdx = rpsOptions.indexOf(playerSelection);
    computerSelection = playerIdx;

    while(playerIdx == computerSelection){
        computerSelection = Math.floor(Math.random() * rpsOptions.length);
    }

    if (computerSelection + 1 == playerIdx){
        console.log(`Player loses!`);
        console.log(`Computer picked: ${rpsOptions[computerSelection]}\nPlayer picked: ${rpsOptions[playerIdx]}`);
        return {player: 0, computer: 1};
    }
    else{
        console.log(`Player wins!`);
        console.log(`Computer picked: ${rpsOptions[computerSelection]}\nPlayer picked: ${rpsOptions[playerIdx]}`);
        return {player:1, computer: 0};
    }
    
}

function mainLoop(){
    var strResponse = {playerScore: 0, computerScore:0};
    while(strResponse.playerScore != 5 & strResponse.computerScore != 5)
    {
        tempScore = playRound(prompt("Rock, paper, or scissors?").toLowerCase());
        if (tempScore.player == 1)
        {
            strResponse.playerScore += 1;
        }
        else{
            strResponse.computerScore += 1;
        }
    }
    if (strResponse.playerScore == 5){
        console.log("Player wins the game!");
    }
    else{
        console.log("Computer wins the game!");
    }
    console.log(strResponse);
}
mainLoop();