function initSale() {
  let time = 60 * 60;

  function updateCountdown() {
    const hours = Math.floor(time / 3600);

    const minutes = Math.floor((time % 3600) / 60);

    const seconds = time % 60;

    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if (h) {
      h.textContent = hours.toString().padStart(2, "0");
    }

    if (m) {
      m.textContent = minutes.toString().padStart(2, "0");
    }

    if (s) {
      s.textContent = seconds.toString().padStart(2, "0");
    }
  }

updateCountdown();

  setInterval(() => {
    if (time > 0) {
      time--;

      updateCountdown();
    }
  }, 1000);
}
