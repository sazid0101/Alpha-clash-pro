// add hidden class & remove the home screen
function hideElementById(elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add("hidden");
}
// remove hidden class & show the play ground
function showElementById(elementId){
    const playGround = document.getElementById(elementId);
    playGround.classList.remove("hidden");
}
// add background color in key which is pressed by user
function setBackgroundColorById(elementId){
    const key = document.getElementById(elementId);
    key.classList.add("bg-orange-400");
}
// remove background color by id,which key is pressed immediately
function removeBackgroundColorById(elementId){
    const key = document.getElementById(elementId);
    key.classList.remove("bg-orange-400");
}
// generate a random number for a-z random alphabets
function getRandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz" ;
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random() * 25 ;
    const randomIndex = Math.round(randomNumber);
    const alphabet = alphabets[randomIndex];

    return alphabet;
}