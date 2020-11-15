const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
  // video variable is connected to HTML5 video tag, so have API we can use on it, including paused property, play and pause method
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  return true;
}

// Set video time to progress
function setVideoProgress() {
  return true;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
