// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
});

var typed = new Typed(".typing2",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
});

function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu"
      ? ((e.name = "close"), list.classList.add("top-[80px]"), list.classList.add("opacity-100"))
      : ((e.name = "menu"), list.classList.remove("top-[80px]"), list.classList.remove("opacity-100"));
  }