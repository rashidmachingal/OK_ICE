var timer = 30;
var interval;

function startCountdown() {
  interval = setInterval(function() {
    timer--;
    if (timer >= 0) {
      document.getElementById("timer").innerHTML = timer;
    }
    if (timer === 0) {
      document.getElementById("secretCode").style.display = "block";
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(interval);
}

document.getElementById("startButton").addEventListener("click", function() {
  startCountdown();
});

window.addEventListener('blur', function() {
  stopCountdown();
});

window.addEventListener('focus', function() {
  stopCountdown();
  timer = 30;
  document.getElementById("timer").innerHTML = timer;
  document.getElementById("secretCode").style.display = "none";
});

window.addEventListener('beforeunload', function() {
  stopCountdown();
});
