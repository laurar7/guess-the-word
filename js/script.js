const guessedLettersElements= document.querySelector(".guessed.letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan= document.querySelector(".remaining span");
const message= document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

// Symbols as placeholders for the chosen word's letters

const placeholders = function(word) {
    const placeholderletters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderletters.push("●");
    }
    wordInProgress.innerText = placeholderletters.join("");
};

placeholders(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letter.Input.value="";
});