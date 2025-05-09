/*
Juguemos a adivinar la palabra 

el usuario tiene 3 intentos para adivinar la palabra oculta

requerimientos: 

-el juego debe tener una palabra oculta.
-el juego puede dar 1 pista de la palabra
-el usuario debe ingresar una suposicion.
-el juego debe verificar si la soposicion del usuario es correcta.
-el juego debe tener un numero limitado de intentos.
-el juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos

*/


let wordSecret = "java"
let tryes = 3

function VerifiedWord(supposition, wordSecret) {
    if (supposition.toLowerCase() === wordSecret) {
        return true;
    }

    return false;

}

function GuessWord() {
    alert("Welcome to the game to guess the secret word")
    alert("You only have 3 tries to guess the word")
    alert("--hints-- the secret word, is a programming lenguaje")

    while (tryes > 0) {
        let supposition = prompt("Guess the word!")
        if (VerifiedWord(supposition, wordSecret)) {
            alert("!!CORRECT YOU GUESSED IT THE WORD!!")
            break;
        } else {
            tryes--;
            if (tryes > 0) {
                alert("INCORRECT, TRY AGAIN")
                alert(`YOU ONLY HAVE ${tryes}`)
            } else {
                alert(`YOU WASTED YOUR TRIES, YOU DONT HAVE MORE TRIES`)
                alert(`THE SECRET WORD WAS ${wordSecret}`)
            }
        }
    }

}

GuessWord()