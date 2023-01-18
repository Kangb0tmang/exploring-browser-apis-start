const card = document.querySelector(".card");

// card.innerHTML = "<h3>Hello World</h3>";
const heading = document.createElement("h3");
heading.innerText = "Hello World";
card.appendChild(heading);

// ? Inner Text vs Inner HTML
// Inner Text --> Only text
// Inner HTML --> HTMLM as a string (need to sanitise it)
// inner HTML requires re-parsing of text which is much slower
// If making HTML elements, use createElement()
// If changing text, use innerText

// ? Append vs Append Child
// Append --> Nodes, string, doesn't return anything, allows multiple items as params
// Append child --> Node, returns node, only a single item

// .remove() removes node itself
// [element].remove() removes just element
// removeChild() removes child element/node

const wrapper = document.createElement("ul");
let famBam = ["Doggo", "Catto", "Wabbit", "Birb"];

famBam.forEach((member) => {
  const li = document.createElement("li");
  li.innerText = member;
  wrapper.appendChild(li);
});

card.appendChild(wrapper);
