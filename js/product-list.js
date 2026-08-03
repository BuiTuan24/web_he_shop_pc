function initProductList() {
  const productList = document.getElementById("productList");

  if (!productList) {
    return;
  }

  function renderProducts(data) {
    productList.innerHTML = "";

    data.forEach((product) => {
      productList.innerHTML += `

            <div class="product-card"
            onclick="openDetail(${product.id})">


                <div class="product-image">

                    <img src="${product.image}">

                </div>



                <div class="product-info">


                    <h3>
                    ${product.name}
                    </h3>


                    <p class="category">
                    ${product.category}
                    -
                    ${product.subCategory}
                    </p>



                    <p class="price">
                    ${product.price}
                    </p>



                    <p>
                    ⭐ ${product.rating}
                    (${product.reviews})
                    </p>



                    <p>
                    👤 ${product.seller}
                    </p>


                </div>


            </div>


            `;
    });
  }

  window.filterProduct = function (category) {
    if (category === "all") {
      renderProducts(products);

      return;
    }

    const result = products.filter((item) => item.category === category);

    renderProducts(result);
  };

  window.openDetail = function (id) {
    window.location.href = "product-detail.html?id=" + id;
  };


  const filter = getFilterFromURL();

let data = products;

if (filter.category) {

    data = data.filter(item =>
        item.category === filter.category
    );

}

if (filter.sub) {

    data = data.filter(item =>
        item.subCategory === filter.sub
    );

}

if (filter.search) {

    const keyword = filter.search.toLowerCase();

    data = data.filter(item =>

        item.name.toLowerCase().includes(keyword) ||

        item.category.toLowerCase().includes(keyword) ||

        item.subCategory.toLowerCase().includes(keyword)

    );

}

renderProducts(data);
}

function getFilterFromURL() {

    const params = new URLSearchParams(window.location.search);

    return {

        category: params.get("category"),

        sub: params.get("sub"),

        search: params.get("search")

    };

}