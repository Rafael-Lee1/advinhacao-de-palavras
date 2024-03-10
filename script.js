const words = ["banana", "abacaxi", "morango", "laranja", "maçã"];
const wordToGuess = words[Math.floor(Math.random() * words.length)];
const wordDisplay = document.getElementById("wordToGuess");
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");

wordDisplay.textContent = "_".repeat(wordToGuess.length);

function checkGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess === wordToGuess) {
        result.textContent = "Parabéns! Você adivinhou a palavra corretamente.";
    } else {
        result.textContent = "Tente novamente. Sua adivinhação está incorreta.";
    }
}
