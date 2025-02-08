// addEventListener for key press.
function handleKeyboardButtonPress(event){
    const playerPressed = event.key
    // get the expected key to press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }else{
        console.log("fail")
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