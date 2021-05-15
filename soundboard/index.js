let sound = new Audio();

document.querySelectorAll('#meow, #applause, #tanoy, #alarm, #alien, #smash').forEach(item => {
  item.addEventListener("click", function() {
    sound.src = `sounds/${item.id}.mp3`;
    sound.play();
  })
})
