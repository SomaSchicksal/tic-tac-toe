


const getComputerChoice = () => {

    const choices = ['Rock', 'Paper', 'Scissors'];

    // Generate a random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Use the random index to return a choice from the array

    console.log("The cp choice is:", choices[randomIndex].toLowerCase())
    return choices[randomIndex].toLowerCase();
}

const playerChoice=prompt("Please enter a input:").toLowerCase();

const computerChoice=getComputerChoice();

const playRound=(playerChoice, computerChoice)=>{

    

    if (playerChoice === computerChoice) {
        console.log("Draw!")
    } else if (computerChoice==="rock" && playerChoice==="paper") {
        console.log("U Win");
    } else if (computerChoice==="rock" && playerChoice==="scissors") {
        console.log("U Lose");
    } else if (computerChoice==="paper" && playerChoice==="rock") {
        console.log("U Lose");
    } else if (computerChoice==="paper" && playerChoice==="scissors") {
        console.log("U Win");
    } else if (computerChoice==="scissors" && playerChoice==="rock") {
        console.log("U win");
    } else if (computerChoice==="scissors" && playerChoice==="paper") {
        console.log("U Lose");
    } 
}

playRound(playerChoice, computerChoice);