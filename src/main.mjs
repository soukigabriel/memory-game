import { Player } from "./player.mjs";

const homeScreenSection = document.querySelector(".homescreen");
const playerSettingsSection = document.querySelector(".players-settings");
const playerSettingsContinueButton = document.querySelector(".player-settings-continue-button");
const gameSection = document.querySelector(".game");
const newGameButton = document.querySelector(".newgame-button");
const playerOneSettings = document.getElementById("player-1-settings");
const playerTwoSettings = document.getElementById("player-2-settings");
const playerOneNameInput = playerOneSettings.querySelector(".player-settings-name-input");
const playerTwoNameInput = playerTwoSettings.querySelector(".player-settings-name-input");
const playerOneColorInput = playerOneSettings.querySelector(".player-settings-color-input");
const playerTwoColorInput = playerTwoSettings.querySelector(".player-settings-color-input");
const playerOne = new Player({name: playerOneNameInput.value, color: playerOneColorInput.value});
const playerTwo = new Player({name: playerTwoNameInput.value, color: playerTwoColorInput.value});
playerOneNameInput.addEventListener("input", UpdatePlayerOneData)
playerOneColorInput.addEventListener("input", UpdatePlayerOneData)
playerTwoNameInput.addEventListener("input", () => {
    playerTwo.name = playerTwoNameInput.value;
})
playerTwoColorInput.addEventListener("input" , () => {
    playerTwo.color = playerTwoColorInput.value;
})
newGameButton.addEventListener("click", NewGameClickHandler)

function NewGameClickHandler()
{
    homeScreenSection.classList.add("inactive");
    playerSettingsSection.classList.remove("inactive");
    gameSection.classList.add("inactive");
}

function UpdatePlayerOneData()
{
    playerOne.name = playerOneNameInput.value;
    playerOne.color = playerOneColorInput.value;
}

function UpdatePlayerTwoData()
{
    playerTwo.name = playerTwoNameInput.value;
    playerTwo.color = playerTwoColorInput.value;
}