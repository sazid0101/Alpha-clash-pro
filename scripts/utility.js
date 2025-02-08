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
// generate a random number for a-z random alphabets
function getRandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz" ;
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random() * 25 ;
    const randomIndex = Math.round(randomNumber);
    const alphabet = alphabets[randomIndex];

    return alphabet;
}