const synth = window.speechSynthesis;

const speak_button = document.getElementById("speak");
const speak_input = document.getElementById("speak-text");
const stop_button = document.getElementById("stop");

speak_button.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(speak_input.value);

  if (synth.paused) {
    synth.resume();
    speak_button.innerText = "Pause Speak";
  } else if (synth.speaking) {
    synth.pause();
    speak_button.innerText = "Resume Speak";
  } else {
    synth.speak(utterance);
    speak_button.innerText = "Pause Speak";
  }

  // Event Listener for when finished speaking
  utterance.addEventListener("end", () => {
    // Reset cta button when finished speaking
    if (!synth.speaking) {
      speak_button.innerText = "Speak Text";
    }
  });
});

stop_button.addEventListener("click", () => {
  synth.cancel();
  speak_button.innerText = "Speak Text";
});
