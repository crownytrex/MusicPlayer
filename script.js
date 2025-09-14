let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'dQw4w9WgXcQ', // Replace with your desired YouTube video ID
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  console.log("Player is ready");
}

function playVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function stopVideo() {
  player.stopVideo();
}
