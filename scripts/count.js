/*<![CDATA[*/
  
const startButton = document.getElementById('start-button'); const countdownContainer = document.getElementById('countdown-container');
const countdownTimer = document.getElementById('countdown-timer'); const secretCode = document.getElementById('secret-code');
let timerValue = 30; let timerInterval; secretCode.style.display = 'none';
function updateTimer() {
  timerValue--;
  countdownTimer.textContent = timerValue;
  if (timerValue === 0) {
    clearInterval(timerInterval);
    secretCode.style.display = 'block';
    countdownContainer.removeChild(countdownTimer);
  }
}
function startCountdown() {
  startButton.disabled = true;
  countdownTimer.style.display = 'block';
  countdownTimer.textContent = timerValue;
  timerInterval = setInterval(updateTimer, 1000);
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      clearInterval(timerInterval);
    } else {
      timerInterval = setInterval(updateTimer, 1000);
    }
  });
}
  
startButton.addEventListener('click', startCountdown);

 /*]]>*/
