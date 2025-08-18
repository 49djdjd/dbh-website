
var btn = document.getElementById("myBtn");

  btn.onclick = function(){
    window.location.href = "intro.html"
  };


var video = document.getElementById("Vmarkus");
var btn1 = document.getElementById("BM");

function myFunction() {
  if (!video.paused) {
    video.currentTime= video.duration;
  } else {
    video.play();
  }
};

  btn.onclick = function(){
    window.location.href = "intro.html"
  };
