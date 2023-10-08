// script.js
document.getElementById('check-answer').addEventListener('click', function() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  const result = document.getElementById('result');
  var score9 = 0;
  if (selectedOption) {
      const userAnswer = selectedOption.value;
      if (userAnswer === 'comets') {
          result.textContent = 'Correct!';
          result.style.fontSize = '28px';
          result.style.color = 'white';
          score9=5;
      } else {
          result.textContent = 'Sorry, that\'s incorrect. The correct answer is comets.';
          result.style.color = 'white';
          result.style.fontSize = '28px';
          score9=0;
      }
      document.getElementById('score').textContent = "Score = "+ score9;
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
