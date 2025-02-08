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