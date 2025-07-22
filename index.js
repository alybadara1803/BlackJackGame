let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el") 
// let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // render out ALL the cards we have
    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard(){
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 6
    // 2. Add the new card to the sum variable
    sum += card

    renderGame()
}
