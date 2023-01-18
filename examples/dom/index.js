const find_me = document.querySelector("#find_me");
console.log("find_me", find_me);

const find_by_id = document.getElementById("find_me");
console.log("find_by_id", find_by_id);

const change_me = document.getElementById("change_me");
change_me.innerText = "Changed!";

const add_html = document.getElementById("add_html");
add_html.innerHTML = "<h3>This is add with JavaScript</h3>";

const find_all = document.querySelectorAll(".change-all");
console.log("find_all", find_all);
find_all.forEach((item, index) => {
  item.innerText = `Added from forEach - ${index}`;
});
