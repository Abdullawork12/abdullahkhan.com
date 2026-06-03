function changeTheme() {
  document.body.style.background =
    document.body.style.background === "black"
      ? "#f2f2f2"
      : "black";

  document.body.style.color =
    document.body.style.color === "white"
      ? "black"
      : "white";
}
function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    document.getElementById("status").innerText = "Please fill all fields ❌";
    return;
  }

  document.getElementById("status").innerText =
    "Thanks " + name + "! Message sent successfully ✅";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
