// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

function init() {
  // Add the voices to the drop-down menu on page load
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];
  synth.addEventListener("voiceschanged", () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

  // Have the voice say the inputted text when the button is pressed
  const buttonSelect = document.querySelector("button");
  const textSelect = document.getElementById("text-to-speak");
  const imgSelect = document.querySelector("[alt='Smiling face']")
  buttonSelect.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(textSelect.value);
    const chosenVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");
    if (chosenVoice !== null) {
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === chosenVoice) {
          utterThis.voice = voices[i];
          synth.speak(utterThis);
          if (synth.speaking) {
            imgSelect.src = `assets/images/smiling-open.png`;
          }
        }
      }
    }
  });

  // Change the face image while the voice is speaking
  function amISpeaking() {
    if (synth.speaking) {
      imgSelect.src = `assets/images/smiling-open.png`;
    } else {
      imgSelect.src = `assets/images/smiling.png`;
    }
  }
  setInterval(amISpeaking, 100);
}