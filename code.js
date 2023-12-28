


const getComputerChoice = () => {

    const choices = ['Rock', 'Paper', 'Scissors'];

    // Generate a random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Use the random index to return a choice from the array

    console.log("The cp choice is:", choices[randomIndex])
    return choices[randomIndex];
}

const playRound=()=>{

    const playerChoice="Scissors";
    const computerChoice=getComputerChoice();

    if (playerChoice === computerChoice) {
        console.log("Draw!")
    } else if (computerChoice==="Rock") {
        console.log("U lose");
    } else {
        console.log("U win")
    }
}

playRound();