function Rules() {
  // variables
  var openRulesBtn = document.getElementById('open-rules');
  var closeRulesBtn = document.getElementById('close-rules');
  var rules = document.getElementById('rules');
  
  // open Rules on pressing '?' btn
  openRulesBtn.addEventListener('click', function() {
    rules.classList.remove('rules--not-visible');
  });
  
  // close Rules on pressing 'X' btn
  closeRulesBtn.addEventListener('click', function() {
    rules.classList.add('rules--not-visible');
  });
  
  // close Rules on pressing 'Esc' on keyboard
  document.addEventListener('keyup', function keyPress(e) {
    if (e.keyCode == 27) {
      rules.classList.add('rules--not-visible');
    }
  });
}

module.exports = Rules;