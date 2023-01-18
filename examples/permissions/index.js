const get_permissions = document.getElementById("get-permissions");
const perm_status = document.getElementById("status");

// Best to check if permissions exists at all
if ("permissions" in navigator) {
  get_permissions.disabled = false;

  get_permissions.addEventListener("click", async () => {
    const permissions_results = await navigator.permissions.query({
      name: "clipboard-read",
    });
    perm_status.innerText = permissions_results.state;
  });
} else {
  perm_status.innerText = "Your browser does not support permissions API";
}
