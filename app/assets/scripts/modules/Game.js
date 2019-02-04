function Game() {
  var scores, activePlayer, currentScore, isPlaying;
  
  init();
  
  // variables declaration
  var newGameBtn = document.querySelector('.btn--new');
  var rollBtn = document.querySelector('.btn--roll');
  var holdBtn = document.querySelector('.btn--hold');
  
  // clicking the New Game button
  newGameBtn.addEventListener('click', init);
  
  // clicking the Roll button
  rollBtn.addEventListener('click',function() {
    if (isPlaying) {
      // random number
      var dice1 = Math.floor((Math.random() * 6) + 1);
      var dice2 = Math.floor((Math.random() * 6) + 1);
      
      // display the dices
      document.querySelector('#dice-1').className = '';
      document.querySelector('#dice-1').classList.add('dice')
      document.querySelector('#dice-1').classList.add('icon-dice-' + dice1);
      document.getElementById('dice-1').style.display = 'block';
      document.querySelector('#dice-2').className = '';
      document.querySelector('#dice-2').classList.add('dice')
      document.querySelector('#dice-2').classList.add('icon-dice-' + dice2);
      document.getElementById('dice-2').style.display = 'block';
      
      // upload the CURRENT score if the rolled number was not 1 
      if (dice1 !== 1 && dice2 !== 1) {
        currentScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = currentScore;
      } else {
        nextPlayer();
      }
    }
  });
  
  // clicking the Hold button
  holdBtn.addEventListener('click', function() {
    if (isPlaying) {
      // add CURRENT score to GLOBAL score
      scores[activePlayer] += currentScore;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      
      var input = document.querySelector('.final-score').value;
      var winningScore;
      // Undefined, 0, null or '' are COERCED to false
      if (input) {
        var winningScore = input;
      } else {
        winningScore = 100;
      }
      
      // check if player won the game
      if (scores[activePlayer] >= winningScore) {
        
        document.querySelector('.player--' + activePlayer + '-panel').classList.add('winner');
        
        document.querySelector('.player--0-panel').classList.remove('active');
        document.querySelector('.player--1-panel').classList.remove('active');
        
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        
        isPlaying = false;
      } else {
        nextPlayer();
      }
      
      
    }
  });
  
  function init() {
    scores = [0,0];
    activePlayer = 0;
    currentScore = 0;
    isPlaying = true;
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player--0-panel').classList.remove('winner');
    document.querySelector('.player--1-panel').classList.remove('winner');
    document.querySelector('.player--1-panel').classList.remove('active');
    document.querySelector('.player--0-panel').classList.remove('active');
    document.querySelector('.player--0-panel').classList.add('active');
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
  }
  
  function nextPlayer() {
    currentScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player--0-panel').classList.toggle('active');
    document.querySelector('.player--1-panel').classList.toggle('active');
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
  }
}

module.exports = Game;