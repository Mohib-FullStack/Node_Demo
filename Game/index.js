/* Guessing Game */
let numberOfWins = 0
let numberOfLost = 0

// run the program for 10 times 
for (let i = 1; i <= 10; i++) {

    // Guess a number from 1 to 100
    let guessNumber = parseInt(prompt("Guess a number from 1 to 100 : "))

    // Generate a random number between 1 to 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    //check condition

    if (guessNumber == randomNumber) {
        numberOfWins++;
        console.log("You have won ")
    }
    else {
        numberOfLost++;
        console.log("You have lost. Random number was : " + randomNumber)
    }
}
console.log("Total win = " + numberOfWins)
console.log("Total lost = " + numberOfLost)