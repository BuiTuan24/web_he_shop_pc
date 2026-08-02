function initProductDetail() {
  const id = Number(new URLSearchParams(window.location.search).get("id"));

  const product = products.find((item) => item.id === id);

  if (!product) {
    document.getElementById("detail").innerHTML = `
    <h2>
    Không tìm thấy sản phẩm
    </h2>
    `;

    return;
  }

  document.getElementById("productImage").src = product.image;

  document.getElementById("productName").textContent = product.name;

  document.getElementById("productCategory").textContent = `
    Danh mục:
    ${product.category}
    -
    ${product.subCategory}
    `;

  document.getElementById("productPrice").textContent = product.price;

  document.getElementById("productSeller").textContent = product.seller;

  document.getElementById("productRating").textContent = `
    ⭐ ${product.rating}/5
    (${product.reviews} đánh giá)
    `;

  document.getElementById("productDescription").textContent =
    product.description;

  // ======================
  // XỬ LÝ NÚT MUA / TRAO ĐỔI
  // ======================

  const buyButton = document.getElementById("buyButton");

  const exchangeButton = document.getElementById("exchangeButton");

  if (product.type === "sale") {
    buyButton.style.display = "block";

    exchangeButton.style.display = "none";
  } else if (product.type === "exchange") {
    buyButton.style.display = "none";

    exchangeButton.style.display = "block";
  } else if (product.type === "both") {
    buyButton.style.display = "block";

    exchangeButton.style.display = "block";
  }
}

function initContact(){



const buy =
document.getElementById("buyButton");


const exchange =
document.getElementById("exchangeButton");


const overlay =
document.getElementById("contactOverlay");


const close =
document.getElementById("closeContact");


const title =
document.getElementById("contactTitle");


const name =
document.getElementById("buyerName");


const phone =
document.getElementById("buyerPhone");


const product =
document.getElementById("contactProduct");



const user =
JSON.parse(
localStorage.getItem("currentUser")
);



if(user){

name.value =
user.fullname;


phone.value =
user.phone;

}



function open(type){


overlay.style.display="flex";


title.innerText =
type;



product.value =
document.getElementById(
"productName"
).innerText;


}




if(buy){


buy.onclick=()=>{

open(
"Mua sản phẩm"
);

};

}



if(exchange){


exchange.onclick=()=>{

open(
"Yêu cầu trao đổi"
);

};

}



close.onclick=()=>{


overlay.style.display="none";


};




document.getElementById(
"sendRequest"
)
.onclick=()=>{


alert(
"Đã gửi yêu cầu thành công!"
);


overlay.style.display="none";


};



}
