
let cards = []
let totalSum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl =document.getElementById("message-el")
let sumEl =document.querySelector("#sum-el")
let cardEl =document.querySelector("#card-el")
let player = {
    name:  "Bunmi",
    chips: 145
}

let PlayerEl= document.getElementById("player-el")
PlayerEl.textContent= player.name+": $"+player.chips;

function getRandomCard(){
    let rollCard = Math.floor(Math.random()*13)+1;
    if(rollCard > 10){
        return 11
    }else if(rollCard === 1){
        return 11
    }else{
        return rollCard;
    }
    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    totalSum= firstCard+secondCard
    renderGame();
}

function renderGame(){
    cardEl.textContent= "Cards: " ;
    for(let i = 0; i<cards.length; i++){
        cardEl.textContent += cards[i]+" "
    }

    sumEl.textContent= "Sum: " + totalSum;
    if (totalSum <= 20){
        message = "Do you want to draw a new card 🤨"

    } else if (totalSum  === 21){
       message = "whooa you are amazing! 'you won blackjack!🥳'"
       hasBlackJack = true;
       
    } else {
        message = "you are out of the game! 😭"
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive ===true && hasBlackJack === false){
        let card = getRandomCard();
        totalSum += card ;
        cards.push(card);
        renderGame();
   }
    }
    
    


