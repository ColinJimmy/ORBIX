// script.js
document.getElementById('check-answer').addEventListener('click', function() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  const result = document.getElementById('result');
  var score4 = 0;
  if (selectedOption) {
      const userAnswer = selectedOption.value;
      if (userAnswer === 'Saturn Launch Vehicle') {
          result.textContent = 'Correct!';
          result.style.fontSize = '25px';
          result.style.color = 'white';
          score4=5;
      } else {
          result.textContent = 'Sorry, that\'s incorrect. The correct answer is Saturn Launch Vehicle.';
          result.style.color = 'white';
          result.style.fontSize = '25px';
          score4=0;
      }
      document.getElementById('score').textContent = "Score = "+ score4;
  } else {
      alert('Please select an answer.');
  }
});
document.getElementById('NEXT').addEventListener('click', function() {
  const next = document.querySelector('input[name="answer"]:checked');

  if (next) {
    //const next = selectedOption.value;
    // if (userAnswer === 'Yuri Gagarin') {
    //     result.textContent = 'Correct!';
    //     result.style.fontSize = '25px';
    //     result.style.color = 'white';
    // } else {
    //     result.textContent = 'Sorry, that\'s incorrect. The correct answer is Yuri Gagarin.';
    //     result.style.color = 'white';
    //     result.style.fontSize = '25px';
    // }
} else {
    alert('Please select an answer.');
}
});
