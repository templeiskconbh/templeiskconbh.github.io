//document.getElementById("starter").focus();
document.body.addEventListener('onload', focus());
document.addEventListener('keydown', detectSpaceKey);

function detectSpaceKey(event) {
  if (event.keyCode == 13) {
    showTime();
  }
}

function showTime() {
  var curtain = document.getElementById('curtain');
  curtain.className = 'open';

  var scene = document.getElementById('scene');
  scene.className = 'expand';

  var starter = document.getElementById('starter');
  starter.className = 'fade-out';

  setTimeout(function () {
    starter.style.display = 'none';
  }, 2000);
  cntDown();
}

function cntDown() {
  let sec = 5;
  const el = document.getElementById('timer');
  const timer = setInterval(() => {
    el.innerHTML = sec--;
    if (sec < 10) el.style.color = '#ff0';
    if (sec < 5) el.style.color = '#ecd3ff';
    if (sec < 0) {
      clearInterval(timer);
      window.location.href = 'index.html';
    }
  }, 1000);
}
