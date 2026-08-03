function loadComponent(id, file, callback) {
  fetch(file)
    .then((response) => response.text())

    .then((data) => {
      const element = document.getElementById(id);

      if (element) {
        element.innerHTML = data;
      }

      if (callback) {
        callback();
      }
    })

    .catch((err) => {
      console.log("Load lỗi:", file, err);
    });
}

// Header
loadComponent("header", "../component/header.html", () => {
  if (typeof updateUserUI === "function") {
    updateUserUI();
  }
  if (typeof initHeader === "function") {
        initHeader();
    }

  const logout = document.getElementById("btnLogout");

  if (logout) {
    logout.onclick = () => {
      localStorage.removeItem("currentUser");

      alert("Đã đăng xuất");

      window.location.href = "../component/index.html";
    };
  }
});

// Auth modal
loadComponent("auth", "../component/auth.html", function () {
  if (typeof initAuth === "function") {
    initAuth();
  }
});

// Sale
loadComponent("sale", "../component/sale.html", function () {
  if (typeof initSale === "function") {
    initSale();
  }
});

// Credit
loadComponent("credit", "../component/credit.html", function () {
  if (typeof initSaleSlider === "function") {
    initSaleSlider();
  }
});

// Footer
loadComponent(
    "footer",
    "../component/footer.html",
    function(){

        if(typeof initFeedback==="function"){

            initFeedback();

        }

    }
);

// Product list
if (typeof initProductList === "function") {
  initProductList();
}

// Product detail
if (typeof initProductDetail === "function") {
  initProductDetail();
}

if(typeof initContact==="function"){

    initContact();

}
if (typeof initBanner === "function") {
    initBanner();
}
