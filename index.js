import "./style.css";

const lightToggle = document.getElementById("light-toggle"),
  bulb = document.querySelector(".bulb");

lightToggle.addEventListener("click", () => {
  bulb.classList.toggle("bulb--on");
});
