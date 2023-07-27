const menu = document.getElementById("menu-icon");

const nav = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    console.log("Yes");
  } else {
    nav.classList.add("active");
    console.log("No");
  }
});

window.onscroll = () => {
  nav.classList.remove("active");
};
