var video = document.getElementById("Vmarkus")
var btn = document.getElementById("myBtn");
var BmBtn = document.getElementById("BM");

  btn.onclick = function(){
    window.location.href = "intro.html"
  };

var video = document.getElementById("Vmarkus");
var btn1 = document.getElementById("BM");
// used ai to help debug
function myFunction() {
  if (video.paused) {
    video.style.display = 'block';
    video.style.zIndex ='100';
    video.play();
    BmBtn.style.display = 'none';
  } else {
    video.pause();
  }
};

video.onended = function(){
  video.style.display='none'
  video.style.zIndex = '-1';
  BmBtn.style.display = CSSLayerBlockRule;
}
