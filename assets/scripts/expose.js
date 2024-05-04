// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti;

function init() {
  // On drop-down menu selection, set the correct image and audio files
  const hornSelect = document.getElementById("horn-select");
  const imgSelect = document.querySelector("[alt='No image selected']");
  const audioSelect = document.getElementsByClassName("hidden")[0];
  hornSelect.addEventListener("change", (event) => {
    imgSelect.src = `assets/images/${event.target.value}.svg`;
    audioSelect.src = `assets/audio/${event.target.value}.mp3`;
  });

  // Edit the volume icon display based on the volume slider
  const volumeSelect = document.getElementById("volume");
  const volumeImgSelect = document.querySelector("[alt='Volume level 2']")
  volumeSelect.addEventListener("input", (event) => {
    let volume = event.target.value;
    if (Number(volume) === 0) {
      volumeImgSelect.src = `assets/icons/volume-level-0.svg`;
    } else if (volume < 33) {
      volumeImgSelect.src = `assets/icons/volume-level-1.svg`;
    } else if (volume < 67) {
      volumeImgSelect.src = `assets/icons/volume-level-2.svg`;
    } else {
      volumeImgSelect.src = `assets/icons/volume-level-3.svg`;
    }
    audioSelect.volume = `0.${event.target.value}`;
  });

  // Play the correct sound when the button is pressed
  const buttonSelect = document.querySelector("button");
  buttonSelect.addEventListener("click", function() {
    if (audioSelect.src !== window.location.href) {
      audioSelect.play();
      // Add confetti when the party horn sound is played
      if (audioSelect.src.includes("party-horn.mp3")) {
        jsConfetti.addConfetti();
      }
    }
  });
}