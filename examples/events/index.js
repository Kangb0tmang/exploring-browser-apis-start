const click_me = document.getElementById("click_me");
const click_value = document.getElementById("click_value");
const change_me = document.getElementById("change_me");

console.log(typeof click_value.value);

let value = parseInt(click_value.value);
console.log("value", value);

// function clicked() {
//   console.log("Clicked");
// }

// click_me.addEventListener("click", clicked);

// Click
click_me.addEventListener("click", () => {
  value += 1;
  click_value.value = value;
});

// On blur, before blur only if value is changed
change_me.addEventListener("change", () => {
  console.log("change", change_me.value);
});

// On focus off
change_me.addEventListener("blur", () => {
  console.log("blur", change_me.value);
});

// On individual character change
change_me.addEventListener("input", () => {
  console.log("input", change_me.value);
});

// BeforeInput
change_me.addEventListener("beforeinput", () => {
  console.log("beforeinput", change_me.value);
});

// Event bubbling
card.addEventListener("click", (event) => {
  console.log(event.composedPath());
});
