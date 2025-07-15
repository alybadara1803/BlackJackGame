// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// let name = prompt("Welcome, please enter your name : ")
// //initialise
// //listen
// //change
// //increment
// let nameEL = document.getElementById("name-el")
// nameEL.textContent = "welcome Mister" + " " + name
let firstCard = 10
let secondCard = 7
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

if (sum <= 20 ){
    console.log("Do you want to draw a new card ?")
} else if ( sum === 21 ){
    console.log("You've won the BlackJack !")
} else {
    console.log("You're out of the game")
}

