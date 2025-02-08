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

        const currentScoreElement = document.getElementById("current-score"); //current score
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        
        const newScore = currentScore + 1;   //if pressed right key,will get +1 point.
        currentScoreElement.innerText = newScore;
    }else{
        const currentLifeElement = document.getElementById("current-life");  //current life
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife -1;   // if pressed the wrong key,will minus 1 point
        currentLifeElement.innerText = newLife
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