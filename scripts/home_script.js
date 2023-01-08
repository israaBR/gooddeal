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
  // create objects from class product
  let prod1 = new Product(
    "https://images.flannels.com/images/products/70921305_4pl.jpg",
    "Gucci Bag",
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
    "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fnike-air-presto-what-the-DM9554-900-1.jpg?q=75&w=800&cbr=1&fit=max",
    "Sneaker",
    "shoes"
  );
  let prod5 = new Product(
    "https://cdn.shopify.com/s/files/1/0008/1798/7645/products/ATTACK2.0LOW_AD90028M_BHY_6_1024x.jpg?v=1664895440",
    "Basketball Shoes",
    "shoes"
  );
  let prod6 = new Product(
    "https://img.freepik.com/premium-photo/women-s-boots-with-black-genuine-leather-heels-isolated-white-background-photo-from-side-diagonally-foreshortened-from-women-s-shoe-collection-2022_173815-21420.jpg?w=2000",
    "Boots",
    "shoes"
  );
  products.push(prod4);
  products.push(prod5);
  products.push(prod6);
  let prod7 = new Product(
    "https://us.benetton.com/dw/image/v2/BBSF_PRD/on/demandware.static/-/Sites-ucb-master/default/dwef17dac2/images/Full_PDP_sq/Benetton_22A_1035D1P17_20B_F_Full_PDP_sq.jpg?sw=850&sh=850",
    "Crew neck",
    "tops"
  );
  let prod8 = new Product(
    "https://dfcdn.defacto.com.tr/2/T6889AZ_22SM_WT34_01_02.jpg",
    "Jacket",
    "tops"
  );
  let prod9 = new Product(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpudQfm9S1eZRpV2h3cLaR-adpTwGS7e_5A&usqp=CAU",
    "Pullover",
    "tops"
  );
  products.push(prod7);
  products.push(prod8);
  products.push(prod9);
  let prod10 = new Product(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpudQfm9S1eZRpV2h3cLaR-adpTwGS7e_5A&usqp=CAU",
    "Pullover",
    "tops"
  );
  let prod11 = new Product(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpudQfm9S1eZRpV2h3cLaR-adpTwGS7e_5A&usqp=CAU",
    "Pullover",
    "tops"
  );
  let prod12 = new Product(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpudQfm9S1eZRpV2h3cLaR-adpTwGS7e_5A&usqp=CAU",
    "Pullover",
    "tops"
  );
  products.push(prod10);
  products.push(prod11);
  products.push(prod12);
}

function generateCard(prod) {
  let product = document.createElement("div");
  product.classList.add("card");
  product.classList.add("m-2");
  product.setAttribute("style", "width: 17rem;");
  let productBody = document.createElement("div");
  productBody.classList.add("card-body");

  let productImg = document.createElement("img");
  productImg.classList.add("card-img-top");
  productImg.src = prod.img;
  productImg.style.height = "50%";
  productBody.append(productImg);

  let productTitle = document.createElement("p");
  productTitle.textContent = prod.title;
  productTitle.classList.add("card-title");
  productBody.append(productTitle);
  let productDesc = document.createElement("p");
  productDesc.classList.add("card-text");
  productDesc.textContent = prod.desc;
  productBody.append(productDesc);
  let btn = document.createElement("a");
  btn.textContent = "Add to Cart";
  btn.classList.add("btn");
  btn.classList.add("btn-warning");
  btn.addEventListener("click", incrementCartCount);
  productBody.append(btn);
  product.append(productBody);
  return product;
}

function viewProducts(category) {
  //create a card for each product
  let productsParent = document.querySelector(".products");
  productsParent.textContent = "";
  if (category == "all") {
    products.forEach((prod) => {
      productsParent.append(generateCard(prod));
    });
  } else {
    products.forEach((prod) => {
      if (prod.category == category) {
        productsParent.append(generateCard(prod));
      }
    });
  }
}
createProducts();
viewProducts("all");

//images slider
let images = [
  "https://media.istockphoto.com/id/1362508125/vector/modern-3d-illustration-of-online-shopping.jpg?s=612x612&w=0&k=20&c=FLd82wTjDmo0HiFzuIKCSaNntSPH8O1sZ_OnSwmvS74=",
  // "https://media.istockphoto.com/id/1286101911/vector/3d-web-vector-illustrations-online-shopping-design-graphic-elements-signs-symbols-mobile.jpg?s=612x612&w=0&k=20&c=_GQg9aFj4YQE0ZsoctePFePwxVVZNZmfUqji6frPUg8=",
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
  window.clearInterval(slideShow);
  viewProducts("all");
});
document.getElementById("bags-cat").addEventListener("click", () => {
  window.clearInterval(slideShow);
  viewProducts("bags");
});
document.getElementById("shoes-cat").addEventListener("click", () => {
  viewProducts("shoes");
});
document.getElementById("tops-cat").addEventListener("click", () => {
  viewProducts("tops");
});
document.getElementById("bottoms-cat").addEventListener("click", () => {
  viewProducts("bottoms");
});

//add to cart
let cartCount = document.getElementById("lblCartCount");
function incrementCartCount() {
  cartCount.textContent = Number(cartCount.textContent) + 1;
}
