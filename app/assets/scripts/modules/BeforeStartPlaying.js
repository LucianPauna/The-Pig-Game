function BeforeStartPlaying() {
  var player1 = prompt('\t\t Player 1 \n Please enter your name', 'Player 1');
  var player2 = prompt('\t\t Player 2 \n Please enter your name', 'Player 2');
  if( player1 === null) {
    document.getElementById('name-0').innerHTML = 'Player 1';
  } else {
    document.getElementById('name-0').innerHTML = player1;
  }
  if (player2 === null) {
    document.getElementById('name-1').innerHTML = 'Player 2';
  } else {
    document.getElementById('name-1').innerHTML = player2;
  }
}

module.exports = BeforeStartPlaying;