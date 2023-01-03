//products objects
class Product {
  constructor(img_, title_, category_) {
    this.img = img_;
    this.title = title_;
    this.desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
    this.category = category_;
  }
}
let products = [];
function createProducts() {
  let prod1 = new Product(
    "https://images.riverisland.com/is/image/RiverIsland/grey-ri-monogram-print-cross-body-bag_758902_main?$ProductListingPortrait$",
    "Hand Bag",
    "bags"
  );
  let prod2 = new Product(
    "https://cdn.shopify.com/s/files/1/2780/3536/collections/leisure_500x.jpg?v=1649250810",
    "Travel Bag",
    "bags"
  );
  let prod3 = new Product(
    "https://i.ebayimg.com/images/g/bbgAAOSwNwVjEKrT/s-l500.jpg",
    "Tote Bag",
    "bags"
  );
  products.push(prod1);
  products.push(prod2);
  products.push(prod3);
  let prod4 = new Product(
    "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18509904/2022/5/31/766bda50-82e7-480b-a52c-9cd648a2d7941653975616884MactreeMenWhiteColourblockedPUSneakers1.jpg",
    "Sneaker",
    "shoes"
  );
  let prod5 = new Product(
    "https://cdn.shopify.com/s/files/1/0008/1798/7645/products/ATTACK2.0LOW_AD90028M_BHY_6_1024x.jpg?v=1664895440",
    "Basketball Shoes",
    "shoes"
  );
  let prod6 = new Product(
    "https://cdn.shopify.com/s/files/1/0008/1798/7645/products/ATTACK2.0LOW_AD90028M_BHY_6_1024x.jpg?v=1664895440",
    "BasketBall Shoes",
    "shoes"
  );
  products.push(prod4);
  products.push(prod5);
  products.push(prod6);
  //   products.push(prod7);
  //   products.push(prod8);
  //   products.push(prod9);
  //   products.push(prod10);
  //   products.push(prod11);
  //   products.push(prod12);
}

function viewProducts() {
  console.log(products);
  let productsParent = document.querySelector(".prods");
  products.forEach((prod) => {
    let product = document.createElement("div");
    product.classList.add("product-col");
    let productImg = document.createElement("img");
    productImg.src = prod.img;
    productImg.classList.add("product-img");
    product.append(productImg);
    let productTitle = document.createElement("p");
    productTitle.textContent = prod.title;
    productTitle.classList.add("product-title");
    product.append(productTitle);
    let productDesc = document.createElement("p");
    productDesc.textContent = prod.desc;
    product.append(productDesc);
    let btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.classList.add("product-btn");
    product.append(btn);
    productsParent.append(product);
  });
}
createProducts();
viewProducts();

//images slider
let images = [
  "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg",
  "https://static.vecteezy.com/system/resources/previews/000/662/990/non_2x/vector-fashion-banner-design.jpg",
  "https://static.vecteezy.com/system/resources/previews/000/662/994/original/vector-colorful-fashion-sale-banner.jpg",
  "https://content.wepik.com/statics/2897958/fashion-banner-blog-9182393page1.jpg",
];
let i = 0;
window.setInterval(() => {
  if (i == images.length) i = 0;
  else if (i == -1) i = images.length - 1;
  let slider_img = document.getElementById("slider-img");
  slider_img.setAttribute("src", images[i]);
  i++;
}, 3000);

//products filteration

//cart

//validate contact-us form
function validateName(name) {
  let validationMsg = document.getElementsByClassName("validation-msg")[0];
  if (!String(name).length) {
    validationMsg.classList.remove("validation-msg-hide");
  } else validationMsg.classList.add("validation-msg-hide");
}
function validateEmail(email) {
  let validationMsg = document.getElementsByClassName("validation-msg")[1];

  if (!String(email).length) {
    validationMsg.classList.remove("validation-msg-hide");
  } else validationMsg.classList.add("validation-msg-hide");
}
function validateMsg(msg) {
  let validationMsg = document.getElementsByClassName("validation-msg")[2];

  if (!String(msg).length) {
    validationMsg.classList.remove("validation-msg-hide");
  } else validationMsg.classList.add("validation-msg-hide");
}
// document.querySelector(".form-btn").addEventListener("click", (event) => {
//   event.preventDefault();
//   validateName(document.getElementsByClassName("form-input")[0].value);
//   validateEmail(document.getElementsByClassName("form-input")[1].value);
//   validateMsg(document.getElementsByClassName("form-input")[2].value);
// });
