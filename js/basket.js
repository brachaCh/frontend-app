const dom = {
    divBasket: document.querySelector("#divBasket"),
    divHello: document.querySelector("#divHello"),
    div_Pay: document.querySelector("#div_Pay"),
    exit: document.querySelector(".exit")
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

dom.exit.onclick = (e) => {
    localStorage.setItem('currentUser', JSON.stringify(-1));
}

const users = JSON.parse(localStorage.getItem("users_data"));
const userId = JSON.parse(localStorage.getItem("currentUser"));
const products = JSON.parse(localStorage.getItem("products_data"));
let sum = 0;

const drewProduct = (product, a) => {
    const productDrew = document.createElement("div");
    productDrew.id = product.id;
    productDrew.classList.add("card");
    productDrew.onclick = (e) => {
        deleteFromBusket(product.id);
    }
    const divImage = document.createElement("div");
    divImage.classList.add("image");
    productDrew.appendChild(divImage);
    const imgProduct = document.createElement("img");
    imgProduct.src = product.src;
    imgProduct.classList.add('sizeImg');
    const brImg = document.createElement("br");
    imgProduct.appendChild(brImg);
    divImage.appendChild(imgProduct);
    const nameProduct = document.createElement("span");
    nameProduct.classList.add("title");
    nameProduct.innerHTML = product.name;
    productDrew.appendChild(nameProduct);
    const brName = document.createElement("br");
    nameProduct.appendChild(brName);
    const amount = document.createElement("span");
    const brAmount = document.createElement("br");
    amount.appendChild(brAmount);
    amount.innerHTML = `כמות: ${a}`;
    amount.classList.add("amount");
    nameProduct.appendChild(amount);
    const priceProduct = document.createElement("span");
    if (product.name == "פרוזן יוגורט") {
        product.price = 20;
    }
    const brPrice = document.createElement("br");
    nameProduct.appendChild(brPrice);
    priceProduct.classList.add("price");
    priceProduct.innerHTML = `מחיר: ${product.price * a} ש"ח`;
    productDrew.appendChild(priceProduct);
    const br = document.createElement("br");
    priceProduct.appendChild(br);
    dom.divBasket.appendChild(productDrew);
    sum += product.price * a;
};

const drewProductOnBusket = (user) => {
    let b = 0;
    let product;
    for (let i = 0; i < 52; i++) {
        if (user.basket[i] != null) {
            product = products[i];
            const a = user.basket[i];
            drewProduct(product, a);
        }
        else
            b++;
    }
    const empty = document.createElement("div");
    empty.id = "empty";
    b == 52 ? empty.innerHTML = "---הסל שלך ריק מדי" : pay();
    dom.divBasket.appendChild(empty);
}

const drewBasket = () => {
    users?.forEach(user => {
        if (user.user_id == userId) {
            const hello = document.createElement("div");
            hello.innerHTML = `שלום ${user.user_name}`;
            hello.classList.add("nameUser");
            dom.divHello.appendChild(hello);
            drewProductOnBusket(user);
        }
    });
}

const pay = () => {
    const divPay = document.createElement("div");
    divPay.innerHTML = `סה"כ לתשלום:  ${sum} ש"ח`;
    const buttonPay = document.createElement("button");
    buttonPay.classList.add("Btn");
    buttonPay.innerHTML = "לתשלום";
    buttonPay.innerHTML += `
  <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>`
    buttonPay.onclick = (e) => {
        window.location.href = "../html/pay.html";
    }
    divPay.appendChild(buttonPay);
    dom.div_Pay.appendChild(divPay);
}
drewBasket();

deleteFromBusket = (idProduct) => {
    users?.forEach(user => {
        if (user.user_id == userId) {
            user.basket[idProduct] = null;
            localStorage.setItem("users_data", JSON.stringify(users));
            dom.divBasket.innerHTML = "";
            dom.divHello.innerHTML = "";
            dom.div_Pay.innerHTML = "";
            sum = 0;
            drewBasket();
        }
    })
}


