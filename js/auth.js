function initAuth() {
  const overlay = document.getElementById("authOverlay");

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const btnLogin = document.getElementById("btnLogin");
  const btnRegister = document.getElementById("btnRegister");

  const btnClose = document.getElementById("btnCloseAuth");

  const btnShowRegister = document.getElementById("btnShowRegister");
  const btnShowLogin = document.getElementById("btnShowLogin");

  function openLogin() {
    overlay.style.display = "flex";

    loginForm.style.display = "block";
    registerForm.style.display = "none";
  }

  function openRegister() {
    overlay.style.display = "flex";

    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }

  function closeModal() {
    overlay.style.display = "none";
  }

  if (btnLogin) {
    btnLogin.addEventListener("click", (e) => {
      e.preventDefault();

      openLogin();
    });
  }

  if (btnRegister) {
    btnRegister.addEventListener("click", (e) => {
      e.preventDefault();

      openRegister();
    });
  }

  btnClose.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  btnShowRegister.addEventListener("click", () => {
    loginForm.style.display = "none";

    registerForm.style.display = "block";
  });

  btnShowLogin.addEventListener("click", () => {
    registerForm.style.display = "none";

    loginForm.style.display = "block";
  });

  //==============================
  // HIỆN / ẨN PASSWORD
  //==============================

  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
      const input = document.getElementById(icon.dataset.target);

      if (input.type === "password") {
        input.type = "text";

        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
      } else {
        input.type = "password";

        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
      }
    });
  });

  //==============================
  // REGEX
  //==============================

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^(0)\d{8}$/;

  //==============================
  // HÀM LỖI
  //==============================

  function error(id, msg) {
    document.getElementById(id).textContent = msg;
  }

  function clear(id) {
    document.getElementById(id).textContent = "";
  }

  //==============================
  // LOGIN
  //==============================

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const account = document.getElementById("loginAccount");

    const password = document.getElementById("loginPassword");

    clear("loginAccountError");
    clear("loginPasswordError");

    let ok = true;

    if (account.value.trim() == "") {
      error("loginAccountError", "Vui lòng nhập Email hoặc SĐT.");

      ok = false;
    }

    if (password.value.length < 8) {
      error("loginPasswordError", "Mật khẩu tối thiểu 8 ký tự.");

      ok = false;
    }

    if (ok) {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Chưa có tài khoản, vui lòng đăng ký");

        return;
      }

      if (account.value === user.email && password.value === user.password) {
        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Đăng nhập thành công");

        loginForm.reset();

        closeModal();

        updateUserUI();

        window.location.href = "product-list.html";
      } else {
        alert("Sai tài khoản hoặc mật khẩu");
      }
    }
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("registerFullName");

    const email = document.getElementById("registerEmail");

    const phone = document.getElementById("registerPhone");

    const pass = document.getElementById("registerPassword");

    const confirm = document.getElementById("registerConfirmPassword");

    clear("registerNameError");
    clear("registerEmailError");
    clear("registerPhoneError");
    clear("registerPasswordError");
    clear("registerConfirmError");

    let ok = true;

    if (name.value.trim().split(/\s+/).length < 2) {
      error("registerNameError", "Nhập đầy đủ họ và tên.");

      ok = false;
    }

    if (!emailRegex.test(email.value.trim())) {
      error("registerEmailError", "Email không hợp lệ.");

      ok = false;
    }

    if (!phoneRegex.test(phone.value.trim())) {
      error("registerPhoneError", "SĐT không hợp lệ.");

      ok = false;
    }

    if (pass.value.length < 8) {
      error("registerPasswordError", "Mật khẩu tối thiểu 8 ký tự.");

      ok = false;
    }

    if (confirm.value !== pass.value) {
      error("registerConfirmError", "Mật khẩu xác nhận không khớp.");

      ok = false;
    }

    if (ok) {
      const user = {
        fullname: name.value,

        email: email.value,

        phone: phone.value,

        password: pass.value,
      };

      localStorage.setItem("user", JSON.stringify(user));

      alert("Đăng ký thành công");

      registerForm.reset();

      registerForm.style.display = "none";

      loginForm.style.display = "block";
    }
  });
}

function updateUserUI() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const guestArea = document.getElementById("guestArea");

  const userArea = document.getElementById("userArea");

  const userName = document.getElementById("userName");

  if (!guestArea || !userArea) {
    return;
  }

  if (user) {
    guestArea.style.display = "none";

    userArea.style.display = "flex";

    userName.textContent = user.fullname;
  } else {
    guestArea.style.display = "flex";

    userArea.style.display = "none";
  }
}
