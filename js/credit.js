function initSaleSlider(){
const track = document.querySelector(".full-case-sale-content");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const gap = 20;

let direction = "next";

const fullcasesale = document.querySelector(".full-case-sale");
const slider = document.querySelector(".slider");

const itemWidth = track.children[0].offsetWidth + gap;
let isMoving = false;
function nextSlide() {
  if (isMoving) return;

  isMoving = true;

  track.style.transform = `translateX(-${itemWidth}px)`;
  track.addEventListener("transitionend", finishNext, { once: true });
}

let auto;

function startAuto() {
  clearInterval(auto);
  auto = setInterval(nextSlide, 1000);
}

function stopAuto() {
  clearInterval(auto);
}

startAuto();

fullcasesale.addEventListener("mouseenter", stopAuto);
fullcasesale.addEventListener("mouseleave", startAuto);

next.addEventListener("click", nextSlide);

prev.addEventListener("click", function () {
  if (isMoving) return;

  isMoving = true;

  const lastItem = track.lastElementChild;

  track.insertBefore(lastItem, track.firstElementChild);

  track.style.transition = "none";

  track.style.transform = `translateX(-${itemWidth}px)`;

  track.offsetHeight;

  track.style.transition = "transform .5s ease";

  track.style.transform = "translateX(0)";

  track.addEventListener(
    "transitionend",
    function () {
      isMoving = false;
    },
    { once: true },
  );
});
function finishNext() {
  const firstItem = track.firstElementChild;

  track.appendChild(firstItem);

  track.style.transition = "none";

  track.style.transform = "translateX(0)";

  track.offsetHeight;

  track.style.transition = "transform .5s ease";

  isMoving = false;
}}