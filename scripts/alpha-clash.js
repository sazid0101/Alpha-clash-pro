function continueGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;
}

function play(){
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}