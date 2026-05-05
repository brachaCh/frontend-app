const dom = {
    productsOrder: document.querySelector("#productsOrder"),
    all: document.querySelector("#all"),
    americanIceCream: document.querySelector("#americanIceCream"),
    iceCoffee: document.querySelector("#iceCoffee"),
    iceCream: document.querySelector("#iceCream"),
    yogurt: document.querySelector("#yogurt"),
    warmFood: document.querySelector("#warmFood"),
    shakes: document.querySelector("#shakes"),
    warmDrink: document.querySelector("#warmDrink"),
    exit: document.querySelector(".exit")
};

const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
const products_data = JSON.parse(localStorage.getItem("products_data"));

dom.exit.onclick = (e) => {
    localStorage.setItem('currentUser', JSON.stringify(-1))
}

const timeoutId = setTimeout(() => {
    swal({
        title: "!!!!!רק היום",
        text: "פרוזן יוגורט רק ב-20 שקל",
        html: true
    });
}, 6000);

dom.all.onclick = (e) => {
    checkCategory(all.textContent);
}

dom.americanIceCream.onclick = (e) => {
    checkCategory(americanIceCream.textContent);
}

dom.iceCoffee.onclick = (e) => {
    checkCategory(iceCoffee.textContent);
}

dom.iceCream.onclick = (e) => {
    checkCategory(iceCream.textContent);
}

dom.yogurt.onclick = (e) => {
    checkCategory(yogurt.textContent);
}

dom.warmFood.onclick = (e) => {
    checkCategory(warmFood.textContent);
}

dom.shakes.onclick = (e) => {
    checkCategory(shakes.textContent);
}

dom.warmDrink.onclick = (e) => {
    checkCategory(warmDrink.textContent);
}

const checkCategory = (categoryName) => {
    dom.productsOrder.innerHTML = "";
    categoryName == "הכל" ? drewProductsOrder() : btnCategory(categoryName);
}

const btnCategory = (categoryName) => {
    products_data?.forEach(product => {zz
        product.category == categoryName ? drewProductOrder(product, product.id) : "";
    })
}

const drewProductsOrder = () => {
    products_data?.map((product, index) =>
        drewProductOrder(product, index)
    );
};

const drewProductOrder = (product, index) => {
    const productDrew = document.createElement("div");
    productDrew.id = product.id;
    productDrew.classList.add("card");
    productDrew.onclick = (e) => {
        addToBasket(product.id);
    }
    const divImage = document.createElement("div");
    divImage.classList.add("image");
    productDrew.appendChild(divImage);
    const imgProduct = document.createElement("img");
    imgProduct.src = product.src;
    imgProduct.classList.add('sizeImg');
    divImage.appendChild(imgProduct);
    const nameProduct = document.createElement("span");
    nameProduct.classList.add("title");
    nameProduct.innerHTML = product.name;
    productDrew.appendChild(nameProduct);
    const priceProduct = document.createElement("span");
    priceProduct.classList.add("price");
    priceProduct.innerHTML = `מחיר: ${product.price} ש"ח`;
    productDrew.appendChild(priceProduct);
    dom.productsOrder.appendChild(productDrew);
};

drewProductsOrder();

const addToBasket = (productId) => {
    const basketUser = JSON.parse(localStorage.getItem("users_data"));
    const userId = JSON.parse(localStorage.getItem("currentUser"));
    basketUser?.forEach(user => {
        if (user.user_id == userId) {
            const basket = user.basket;
            console.log(basket[productId]);
            basket[productId] == null ? basket[productId] = 1 : basket[productId]++;
        }
    });
    localStorage.setItem("users_data", JSON.stringify(basketUser));
}