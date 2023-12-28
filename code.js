console.log("Hello")


const getComputerChoice = () => {

    const choices = ['Rock', 'Paper', 'Scissors'];

    // Generate a random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Use the random index to return a choice from the array

    console.log(choices[randomIndex]);
    return choices[randomIndex];
}

getComputerChoice();