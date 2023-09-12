// tạo 1 tro chơi oản tù tì
let playgame = confirm("Shall we play rock, paper, or scissors?")
if (playgame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissors")
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase()
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors"
            let result =
                playerOne === computer
                    ? "tie game"
                    : playerOne === "rock" && computer === "paper"
                        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Win!`
                        : playerOne === "paper" && computer === "scissors"
                            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Win!`
                            : playerOne === "scissors" && computer === "rock"
                                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Win!`
                                : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne Win!`
            alert(result)
            let playAgain = confirm("Play Again?")
            playAgain ? location.reload() : alert('OK, thanks for playing')
        } else {
            alert("You didn't enter rock, paper, or scissors")
        }
    } else {
        alert("I guess you changed your mind. Maybe next time")
    }
} else {
    alert("ok, maybe last time")
}
