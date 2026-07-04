// Lấy tất cả các khối có class là hero-banner-slide
const slides = document.querySelectorAll(".hero-banner-slide");
let currentSlide = 0;

function nextBanner() {
  if (slides.length === 0) return;

  // Xóa class 'active' của slide hiện tại để ẩn đi
  slides[currentSlide].classList.remove("active");

  // Tính toán vị trí slide tiếp theo
  currentSlide = (currentSlide + 1) % slides.length;

  // Thêm class 'active' vào slide tiếp theo để hiện lên
  slides[currentSlide].classList.add("active");
}

// function set time flash sale
setInterval(nextBanner, 3000);

let time = 1 * 60 * 60;
function updateCountdown() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

setInterval(() => {
  if (time > 0) {
    time--;
    updateCountdown();
  }
}, 1000);

const track = document.querySelector(".full-case-sale-content");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

const gap = 20;

let direction = "next";

// let auto = setInterval(nextSlide, 1000);

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

  // 1. lấy item cuối
  const lastItem = track.lastElementChild;

  // 2. đưa lên đầu
  track.insertBefore(lastItem, track.firstElementChild);

  // 3. tắt transition để set vị trí “giả”
  track.style.transition = "none";

  // 4. đẩy sang trái 1 item (ngược với next)
  track.style.transform = `translateX(-${itemWidth}px)`;

  // force reflow
  track.offsetHeight;

  // 5. bật lại transition
  track.style.transition = "transform .5s ease";

  // 6. animate về vị trí gốc
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
}
