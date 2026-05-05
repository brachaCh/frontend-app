const dom = {
  products: document.getElementById("products"),
  to_orders: document.getElementById("to_orders"),
  tz_order: document.getElementById("tz_order"),
  exit: document.querySelector(".exit")
};

const currentUser1 = JSON.parse(localStorage.getItem("currentUser"))

dom.exit.onclick = (e) => {
  localStorage.setItem('currentUser', JSON.stringify(-1));
}

const productsData = async () => {
  const data = await fetch("../json/products.json");
  const products_data = await data.json();
  localStorage.setItem("products_data", JSON.stringify(products_data));
  drewProducts(products_data);
};

productsData();

const drewProducts = (products_data) => {
  products_data?.map((product, index) => {
    drewProduct(product, index);
  });
};

const drewProduct = (product, index) => {
  const flip_card = document.createElement("div");
  flip_card.classList.add("flip-card");
  products.appendChild(flip_card);
  const flip_card_inner = document.createElement("div");
  flip_card_inner.classList.add("flip-card-inner");
  flip_card.appendChild(flip_card_inner);
  const flip_card_front = document.createElement("div");
  flip_card_front.classList.add("flip-card-front");
  flip_card_front.innerHTML = product.name;
  flip_card_inner.appendChild(flip_card_front);
  const flip_card_back = document.createElement("div");
  flip_card_back.classList.add("flip-card-back");
  flip_card_inner.appendChild(flip_card_back);
  const imgProduct = document.createElement("img");
  imgProduct.src = product.src;
  imgProduct.classList.add('sizeImg');
  flip_card_back.appendChild(imgProduct);
};

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

dom.to_orders.onclick = (e) => {
  currentUser == -1 ? window.location.href = "../html/login.html" :
    window.location.href = "../html/productsOrder.html";
};

