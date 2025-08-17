var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (!video.paused) {
    video.currentTime= video.duration;
  } else {
    video.play();
  }
}

// ai was used to help me debug this because I had some issues
video.onended = function(){
  document.body.style.backgroundImage = 'url("connor-backgorund.jpg")';
  video.style.display ='none';
  document.body.style.backgroundSize ='cover';
  document.body.style.backgroundAttachment = 'fixed';

  btn.onclick = function(){
    window.location.href = "intro.html"
  }
};

