const image = document.getElementById('imgaNniversaire');
const audio = document.getElementById('audioaNniversaire');


image.addEventListener('click', () => {

  if (audio.paused) {
    audio.play(); 
  } else {
    audio.pause(); 
    audio.currentTime = 0;
  }
});