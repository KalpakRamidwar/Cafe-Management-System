let trendFood = document.querySelectorAll(".trendFood");
let foodCard = document.querySelectorAll(".foodCard");
let count = 0;

// Slide function
const myFun = () => {
  trendFood.forEach((currImg) => {
    currImg.style.transform = `translateX(-${count * 100}%)`;
  });
};

// Auto slide
setInterval(() => {
  count++;
  if (count === trendFood.length) {
    count = 0;
  }
  myFun();
}, 4000);

// Food detail popup
foodCard.forEach((curCard) => {
  curCard.addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("cardDetail");
    div.innerHTML = `
      <i id="icon" class="fa-solid fa-xmark"></i>
      <img src=${curCard.firstElementChild.src} alt="">
      <h2>Food Details</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex, quam veniam impedit minus dolorem architecto labore nostrum aliquid deserunt.</p>
    `;
    document.querySelector("body").appendChild(div);

    document.querySelector("#icon").addEventListener("click", function () {
      div.remove();
    });
  });
});

// Mobile navbar toggle
let bar = document.getElementById("bar");
let nav = document.querySelector("nav ul");

bar.addEventListener("click", () => {
  nav.classList.toggle("showMenu");
});
