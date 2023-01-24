const audio = document.getElementById('audio');

let hidden;
let visibilityChange;

if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilityhange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

document.addEventListener(visibilityChange, () => {
  if (document[hidden]) {
    document.title = 'Quiet please';
    audio.pause();
  } else {
    document.title = 'LOUD NOISES';
    audio.play();
  }
});
