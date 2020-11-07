//initial function which loads whole game
const game = () => {
    //declare initial scores of players
    let pScore = 0;
    let cScore = 0;

    //starts the game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }
    //start the match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //options for computer which would be random
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option => {
            option.addEventListener('click', function(){
            
            //computer makes a choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            //compare hands to start the match
            compareHands(this.textContent, computerChoice);

            //update images based on the choice of both players
            playerHand.src = `./img/${this.textContent}.png`;
            computerHand.src = `./img/${computerChoice}.png`;
            });
        });  
    };

    //update the score 
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    ;}


    //method to check the hands of both computer and player to decide who wins
    const compareHands = (playerChoice, computerChoice) =>{

        //update text for the result
        const winner = document.querySelector('.winner');
        //check if it is a tie
        if(playerChoice === computerChoice){
            winner.textContent= 'It is a Tie';
            return;
        }
        //check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors'){
                winner.textContent= 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent= 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors'){
                winner.textContent= 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent= 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock'){
                winner.textContent= 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent= 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }


    };

    //calling the inner functions
    startGame();
    playMatch();
};

//calling the game function
game();