// Share API limited for now, but works better on mobile

const share_button = document.getElementById("share");
const share_link = document.getElementById("share-link");
const text = document.getElementById("text");

if ("share" in navigator) {
  share_button.disabled = false;
} else {
  share_button.textContent = "Your browser supports the Web Share API";
}

share_button.addEventListener("click", async () => {
  const text = document.getElementById("text").value;
  const shareData = {
    title: "Shared from Level Up",
    text: text.value,
    url: "https://leveluptutorials.com",
  };
  await navigator.share(shareData);
});

let isMobileAgent;
if (
  /Android|webOS|iPhone|iPad|Opera Mini|BlackBerry/i.test(navigator.userAgent)
) {
  isMobileAgent = true;
} else {
  isMobileAgent = false;
}

// Check screen size
const isMobileSize = window.matchMedia(
  "only screen and (max-width: 760px)"
).matches;

// Check for touch events
const isTouch = "ontouchstart" in document.documentElement;

// Initialise
if ("share" in navigator) {
  // Check if mobile
  if (isMobileAgent && isMobileSize && isTouch) {
    // Make button active
    share_button.disabled = false;
    share_link.style.display = "none";
  } else {
    intialiseFallback();
  }
} else {
  intialiseFallback();
}

function intialiseFallback() {
  share_button.style.display = "none";
  share_link.href = `https://twitter.com/share?url=${window.location.href}&text=${text.value}`;
}
