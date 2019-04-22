/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
 
let scores, roundScore, activePlayer, gameON, maxScore;

init();

document.querySelector(`.btn-roll`).addEventListener(`click`, function() {
    if(gameON){
        
        //1. RNG
        let dice_1 = Math.floor(Math.random()* 6)+1;
        let dice_2 = Math.floor(Math.random()* 6)+1;
        

        //2. Display the result
        let diceDOM = document.querySelector(`.dice_1`);
        diceDOM.style.display = `block`;
        diceDOM.src = `dice-${dice_1}.png`;
        diceDOM = document.querySelector(`.dice_2`);
        diceDOM.style.display = `block`;
        diceDOM.src = `dice-${dice_2}.png`;

        //3. If there are 2x sixes in a row
        if (dice_1  === dice_2 && dice_2 === 6) {
            scores[activePlayer] = 0;
            console.log(`BOOYAKA SNEIK EIES`);
            
            document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
            nextPlaya;
        }
        //4. Update the round score IF the rolled number aint a 1
        else if (dice_1 !== 1 && dice_2 !== 1) {
            //Add score to round total
            roundScore += (dice_1 + dice_2);
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
        } else {
            nextPlaya();
        }
    };
});


 
 
document.querySelector(`.btn-hold`).addEventListener(`click`, function () {
    // Add CURRENT score to GLOBAL score
   if(gameON) {
        scores[activePlayer] += roundScore;
        console.log(scores[activePlayer]);
        // Update the UI
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];


        // Check if player won the game 
        if ( scores[activePlayer] >= maxScore) {
            document.getElementById(`name-${activePlayer}`).textContent = `WINNER!`;
            document.querySelector(`.dice`).style.display = `none`;
            document.querySelector(`.player-${activePlayer}-panel`).classList.toggle(`active`);
            document.querySelector(`.player-${activePlayer}-panel`).classList.toggle(`winner`);
            gameON = false;
        } else {
            nextPlaya();
    }
}

});


function nextPlaya() {
    console.log(`Perehod hoda`);
    
    // Remove active status from the acting player
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle(`active`); 
    // Zero the acting players current score in the UI
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    // Switch the active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // Zero the roundscore
    roundScore = 0;
    // Make the next players UI active
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle(`active`);
    // Hide the dice
    document.querySelector(`.dice_1`).style.display = `none`;
    document.querySelector(`.dice_2`).style.display = `none`;
};



document.querySelector(`.btn-new`).addEventListener(`click`, init);


function init() {
    scores = [0,0];
    roundScore = 0; 
    activePlayer = 0;
    gameON = true;
    

    document.querySelector(`#form-score`).value ? maxScore = document.querySelector(`#form-score`).value : maxScore = 100;

    document.querySelector(`.dice_1`).style.display = `none`;
    document.querySelector(`.dice_2`).style.display = `none`;
    document.getElementById(`score-0`).textContent = `0`;
    document.getElementById(`score-1`).textContent = `0`;
    document.getElementById(`current-0`).textContent = `0`;
    document.getElementById(`current-1`).textContent = `0`;
    document.getElementById(`name-0`).textContent = `Player 0`;
    document.getElementById(`name-1`).textContent = `Player 1`;
    document.querySelector(`.player-0-panel`).classList.remove(`winner`);
    document.querySelector(`.player-1-panel`).classList.remove(`winner`);
    document.querySelector(`.player-0-panel`).classList.remove(`active`);
    document.querySelector(`.player-1-panel`).classList.remove(`active`);
    document.querySelector(`.player-0-panel`).classList.add(`active`);
}



