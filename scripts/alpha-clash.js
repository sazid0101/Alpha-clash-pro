// addEventListener for key press.
function handleKeyboardButtonPress(event){
    const playerPressed = event.key
    // get the expected key to press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet) //call for remove immediate pressed key color
        continueGame()   //function call for get continuously alphabet.

        const currentScore = getTextElementValueById("current-score"); //current score
        // const currentScoreText = currentScoreElement.innerText;         //if we don't use function,than it will be work.
        // const currentScore = parseInt(currentScoreText)
        
        const newScore = currentScore + 1;   //if pressed right key,will get +1 point.
        setTextElementValueById("current-score", newScore)
    }else{
        const currentLife = getTextElementValueById("current-life");  //current life
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        const newLife = currentLife -1;   // if pressed the wrong key,will minus 1 point
        setTextElementValueById("current-life", newLife)
        if(newLife === 0){
            gameOver();
        }
    }
}
// key pressed...
document.addEventListener("keyup", handleKeyboardButtonPress) 

// ..........
function continueGame(){
    const alphabet = getRandomAlphabet();
    // show alphabet in the display
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;
    // set keys background color
    setBackgroundColorById(alphabet)
}

function play(){
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}

function gameOver(){
    hideElementById("play-ground")
    showElementById("final-score")
}

function playAgain(){
    hideElementById("final-score")
    showElementById("play-ground")
    setTextElementValueById("current-score", 0)
    setTextElementValueById("current-life", 5)
}