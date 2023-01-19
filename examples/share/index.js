// Share API limited for now, but works better on mobile

const share_button = document.getElementById("share");

if ("share" in navigator) {
  share_button.disabled = false;
} else {
  share_button.textContent = "Your browser supports the Web Share API";
}

share_button.addEventListener("click", async () => {
  const text = document.getElementById("text").value;
  const shareData = {
    title: "Shared from Level Up",
    text,
    url: "https://leveluptutorials.com",
  };
  await navigator.share(shareData);
});
