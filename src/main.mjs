const homeScreenSection = document.querySelector(".homescreen");
const playerSettingsSection = document.querySelector(".players-settings");
const gameSection = document.querySelector(".game");
const newGameButton = document.querySelector(".newgame-button");

newGameButton.addEventListener("click", NewGameClickHandler)



function NewGameClickHandler()
{
    homeScreenSection.classList.add("inactive");
    playerSettingsSection.classList.remove("inactive");
    gameSection.classList.add("inactive");
}