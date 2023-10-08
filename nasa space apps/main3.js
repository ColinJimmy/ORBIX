// script.js
document.getElementById('check-answer').addEventListener('click', function() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  const result = document.getElementById('result');
  var score3 = 0
  if (selectedOption) {
      const userAnswer = selectedOption.value;
      if (userAnswer === '55 Cancri e') {
          result.textContent = 'Correct!';
          result.style.fontSize = '28px';
          result.style.color = 'white';
          score3=5;
      } else {
          result.textContent = 'Sorry, that\'s incorrect. The correct answer is 55 Cancri e.';
          result.style.color = 'white';
          result.style.fontSize = '28px';
          score3=0;
      }
      document.getElementById('score').textContent = "Score = "+ score3;
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
