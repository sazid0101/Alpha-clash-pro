function hideElementById(elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add("hidden")
}

function showElementById(elementId){
    const playGround = document.getElementById(elementId);
    playGround.classList.remove("hidden")
}