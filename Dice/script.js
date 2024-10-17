function rollDice() {
    // Generate random numbers for both dice
    var player1Roll = Math.floor(Math.random() * 6) + 1;
    var player2Roll = Math.floor(Math.random() * 6) + 1;

    // Set dice images based on the random numbers
    document.getElementById("dice1").src = "dice" + player1Roll + ".png";
    document.getElementById("dice2").src = "dice" + player2Roll + ".png";

    // Determine the winner
    var winnerMessage;
    if (player1Roll > player2Roll) {
        winnerMessage = "Player 1 Wins!";
    } else if (player1Roll < player2Roll) {
        winnerMessage = "Player 2 Wins!";
    } else {
        winnerMessage = "It's a Draw!";
    }

    // Display the winner message
    document.getElementById("winnerMessage").innerHTML = winnerMessage;
}
