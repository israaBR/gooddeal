class Product {
  constructor(id_, title_, price_, desc_, category_, img_, rating_, total_) {
    this.id = id_;
    this.title = title_;
    this.price = price_;
    this.img = img_;
    this.title = title_;
    this.desc = desc_;
    this.category = category_;
    this.rating = {
      rate: rating_,
      count: total_,
    };
  }
}

// fetch products from the API
let categoriesList = [];
let productsList = [];
let cart_products = [];

async function fetch_categories() {
  let result = await (
    await fetch("https://fakestoreapi.com/products/categories")
  ).json();
  return result;
}
async function fetch_all_products() {
  let result = await (await fetch("https://fakestoreapi.com/products")).json();
  return result;
}
async function fetch_category_products(category) {
  let result = await (
    await fetch(`https://fakestoreapi.com/products/category/${category}`)
  ).json();
  return result;
}

// view products in home page
let categoriesParent = document.querySelector(".categories");
let productsParent = document.querySelector(".products");

function create_product(product) {
  return new Product(
    product.id,
    product.title,
    product.price,
    product.description,
    product.category,
    product.image,
    product.rating.rate,
    product.rating.count
  );
}

function generate_product_card(prod) {
  let productImg = document.createElement("img");
  productImg.classList.add("card-img-top");
  productImg.classList.add("mx-5");
  productImg.classList.add("mb-2");
  productImg.classList.add("h-50");
  productImg.src = prod.img;
  productImg.style.width = "60%";
  productImg.style.height = "20%";
  let productTitle = document.createElement("p");
  productTitle.textContent = String(prod.title).slice(0, 18) + " ..";
  productTitle.classList.add("card-title");
  productTitle.classList.add("h-auto");
  productTitle.classList.add("my-3");
  let product_info = document.createElement("div");
  product_info.classList.add("row");
  product_info.classList.add("h-auto");
  let product_price = document.createElement("div");
  product_price.classList.add("col-6");
  product_price.classList.add("product-price");
  let currency = document.createElement("p");
  currency.textContent = "$";
  currency.classList.add("fw-bold");
  currency.classList.add("fs-4");
  currency.classList.add("d-inline-block");
  let price = document.createElement("p");
  price.classList.add("price");
  price.classList.add("fs-5");
  price.classList.add("d-inline-block");
  price.textContent = prod.price;
  product_price.append(currency, price);
  let product_rating = document.createElement("div");
  product_rating.classList.add("col-6");
  product_rating.classList.add("product-rating");
  let rate = document.createElement("p");
  rate.classList.add("rate");
  rate.classList.add("d-inline-block");
  rate.classList.add("fw-bold");
  rate.classList.add("fs-5");
  rate.textContent = prod.rating.rate;
  let star = document.createElement("i");
  star.classList.add("fa-regular");
  star.classList.add("fa-star");
  star.classList.add("fw-bold");
  star.classList.add("fs-5");
  let count = document.createElement("p");
  count.classList.add("count");
  count.classList.add("my-1");
  count.classList.add("d-inline-block");
  count.textContent = ` (${prod.rating.count})`;
  product_rating.append(rate, star, count);
  let product_btn = document.createElement("div");
  product_btn.classList.add("col-12");
  let addToCart_btn = document.createElement("button");
  addToCart_btn.classList.add("btn");
  addToCart_btn.classList.add("btn-warning");
  addToCart_btn.classList.add("w-100");
  addToCart_btn.textContent = "Add to Cart";
  addToCart_btn.classList.add("m-1");
  product_btn.append(addToCart_btn);
  product_info.append(product_price, product_rating, product_btn);
  let product = document.createElement("div");
  product.classList.add("card");
  product.classList.add("m-2");
  product.setAttribute("style", "width: 18rem;");
  let productBody = document.createElement("div");
  productBody.classList.add("card-body");
  productBody.append(productImg, productTitle, product_info);
  product.append(productBody);
  return product;
}
function view_products() {
  productsParent.textContent = "";
  productsList.forEach((prod) => {
    productsParent.append(generate_product_card(prod));
  });
}
function generate_category_btns() {
  categoriesList.forEach((category) => {
    let category_btn = document.createElement("button");
    category_btn.classList.add("btn");
    category_btn.classList.add("btn-warning");
    category_btn.classList.add("mx-2");
    category_btn.setAttribute("id", category);
    category_btn.textContent = category;
    category_btn.addEventListener("click", (event) => {
      fetch_category_products(event.target.id)
        .then((result) => {
          productsList = [];
          result.forEach((product) => {
            productsList.push(create_product(product));
          });
          view_products();
        })
        .catch((error) => console.log(error));
    });
    categoriesParent.append(category_btn);
  });
}
fetch_categories()
  .then((result) => {
    result.forEach((category) => {
      categoriesList.push(category);
    });
  })
  .catch((error) => console.log(error));

//images slider
let images = [
  "https://media.istockphoto.com/id/1362508125/vector/modern-3d-illustration-of-online-shopping.jpg?s=612x612&w=0&k=20&c=FLd82wTjDmo0HiFzuIKCSaNntSPH8O1sZ_OnSwmvS74=",
  "https://img.freepik.com/premium-psd/online-shopping-store-concept-mobile-phone-with-3d-shopping-cart-shopping-bag-like-icon_106244-2052.jpg?w=2000",
  "https://img.freepik.com/premium-psd/online-shopping-store-concept-mobile-phone-with-3d-shopping-cart-shopping-bag-gift-boxes_106244-2050.jpg?w=2000",
];
let i = 0;
function view_next() {
  i++;
  if (i == images.length) i = 0;
  let slider_img = document.getElementById("slider-img");
  slider_img.setAttribute("src", images[i]);
}
function view_previous() {
  i--;
  if (i == -1) i = images.length - 1;
  let slider_img = document.getElementById("slider-img");
  slider_img.setAttribute("src", images[i]);
}
let slideShow = window.setInterval(() => {
  view_next();
}, 3000);
document.getElementById("slider-prev").addEventListener("click", view_previous);
document.getElementById("slider-next").addEventListener("click", view_next);

//filter products by category
document.getElementById("all-cat").addEventListener("click", () => {
  fetch_all_products()
    .then((result) => {
      productsList = [];
      result.forEach((product) => {
        productsList.push(create_product(product));
      });
      view_products();
    })
    .catch((error) => console.log(error));
});

//add to cart
let cartCount = document.getElementById("lblCartCount");
function incrementCartCount() {
  cartCount.textContent = Number(cartCount.textContent) + 1;
}

///////////////////////////////////////////////////////////////////////////////////
fetch_all_products()
  .then((result) => {
    result.forEach((product) => {
      productsList.push(create_product(product));
    });
    view_products();
  })
  .catch((error) => console.log(error));
fetch_categories()
  .then((result) => {
    generate_category_btns();
  })
  .catch((error) => console.log(error));

//TODO  Add to Cart
//TODO  View Products Description on Hover
//TODO  Open Cart
//TODO  Write unit tests for validation functions
