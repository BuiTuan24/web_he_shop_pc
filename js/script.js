
const slides = document.querySelectorAll(".hero-banner-slide");
let currentSlide = 0;

function nextBanner() {
  if (slides.length === 0) return;

  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

function initFeedback(){ 
  const form = document.getElementById("feedbackForm");

  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  function showError(input, errorElement, message) {
    input.classList.add("invalid");
    errorElement.innerText = message;
  }

  function clearError(input, errorElement) {
    input.classList.remove("invalid");
    errorElement.innerText = "";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Chặn tải lại trang

    let isValid = true;

    if (fullnameInput.value.trim() === "") {
      showError(
        fullnameInput,
        document.getElementById("fullnameError"),
        "Vui lòng nhập họ và tên.",
      );
      isValid = false;
    } else {
      clearError(fullnameInput, document.getElementById("fullnameError"));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      showError(
        emailInput,
        document.getElementById("emailError"),
        "Vui lòng nhập địa chỉ email.",
      );
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(
        emailInput,
        document.getElementById("emailError"),
        "Email không đúng định dạng (VD: name@gmail.com).",
      );
      isValid = false;
    } else {
      clearError(emailInput, document.getElementById("emailError"));
    }

    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneInput.value.trim() === "") {
      showError(
        phoneInput,
        document.getElementById("phoneError"),
        "Vui lòng nhập số điện thoại.",
      );
      isValid = false;
    } else if (!phoneRegex.test(phoneInput.value.trim())) {
      showError(
        phoneInput,
        document.getElementById("phoneError"),
        "Số điện thoại không hợp lệ (gồm 10 số, bắt đầu bằng 0).",
      );
      isValid = false;
    } else {
      clearError(phoneInput, document.getElementById("phoneError"));
    }

    if (messageInput.value.trim() === "") {
      showError(
        messageInput,
        document.getElementById("messageError"),
        "Vui lòng nhập nội dung phản hồi.",
      );
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(
        messageInput,
        document.getElementById("messageError"),
        "Nội dung phản hồi phải có ít nhất 10 ký tự.",
      );
      isValid = false;
    } else {
      clearError(messageInput, document.getElementById("messageError"));
    }

    if (isValid) {
      alert("Cảm ơn bạn tôi đã nhận được phản hồi!");
      form.reset();
    }
  });
}

