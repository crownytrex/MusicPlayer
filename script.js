const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');

fileInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    audioPlayer.load();
  }
});

function playAudio() {
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function toggleLoop() {
  const loopCheckbox = document.getElementById('loopToggle');
  audioPlayer.loop = loopCheckbox.checked;
}
