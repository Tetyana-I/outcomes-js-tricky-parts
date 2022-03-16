// Write a function called guessingGame
// which returns a function that allows you to guess a random whole number between 0 and 99.
// Every time you create a new game, it should select a new random number, and keep it secret from the player.

// Once the game has started, you can guess the number. 
// The game should tell you whether your guess is too high, too low, or correct.

// After a correct guess, the game ends.

// For example:
// let game = guessingGame();
// game(50); // "50 is too low!"
// game(90); // "90 is too high!"
// game(70); // "You win! You found 70 in 3 guesses."
// game(70); // "The game is over, you already won!"

function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 100);
    let win = false;
    let guessesCount = 0;
    return function myGuess(num) {
                guessesCount++;
                if (num === randomNumber) {
                    if (win !== true) {
                        win = true;
                        return `You win! You found ${randomNumber} in ${guessesCount} guesses`;
                    } 
                    else return "The game is over, you already won!";
                } 
                if (num < randomNumber) return `${num} is too low!`;
                return  `${num} is too high!`;
    };
}

module.exports = { guessingGame };


