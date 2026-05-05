const dom = {
    btn_product: document.getElementById('btn_product'),
    inputSearchStores: document.getElementById('inputSearchStores'),
    storesContent: document.querySelector("#storesContent"),
    InputContainer: document.querySelector(".InputContainer"),
    exit: document.querySelector(".exit")
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const stores_data = JSON.parse(localStorage.getItem("stores_data"));

dom.exit.onclick = (e) => {
    localStorage.setItem('currentUser', JSON.stringify(-1));
}

const storesData = async () => {
    const data = await fetch('../json/stores.json');
    const stores_data = await data.json();
    localStorage.setItem('stores_data', JSON.stringify(stores_data));
}

storesData();

dom.inputSearchStores.onchange = (e) => {
    let arrayStores = [];
    stores_data?.forEach(store => {
        if (store.city == e.target.value)
            arrayStores.push(store.name);
    });
    dom.storesContent.innerHTML = "";
    arrayStores.length == 0 ? dom.storesContent.innerHTML += "לא נמצאו סניפים באזורך" : drewStores(arrayStores);
}

const drewStores = (arrayStores) => {
    arrayStores.forEach(nameStore => {
        stores_data?.forEach(store => {
            if (store.name == nameStore)
                drewStore(store);
        })
    })
}

const drewStore = (store) => {
    const divStore = document.createElement("div");
    divStore.id = "divStore";
    const divNameSnif = document.createElement("div");
    divNameSnif.id = "divNameSnif";
    divNameSnif.innerHTML = `סניף ${store.name}`;
    const br = document.createElement("br");
    divNameSnif.appendChild(br);
    divNameSnif.innerHTML += "----------------------------------------------------------------------------------------------------------------------------";
    divStore.appendChild(divNameSnif);
    const divSnif = document.createElement("div");
    divSnif.id = "divSnif";
    divStore.appendChild(divSnif);
    const divStoreImage = document.createElement("div");
    divStoreImage.id = "divStoreImage";
    const StoreImage = document.createElement("img");
    StoreImage.src = store.src;
    StoreImage.id = "StoreImage";
    divStoreImage.appendChild(StoreImage);
    divSnif.appendChild(divStoreImage);
    const divDetailsStore = document.createElement("div");
    divDetailsStore.id = "divDetailsStore";
    const clock = document.createElement("img");
    clock.id = "clock";
    clock.src = "../image/png001521.png";
    divDetailsStore.appendChild(clock);
    divDetailsStore.innerHTML += `שעות פתיחה`;
    const br1 = document.createElement("br");
    divDetailsStore.appendChild(br1);
    divDetailsStore.innerHTML += `א'- ה':${store.days}`;
    const br2 = document.createElement("br");
    divDetailsStore.appendChild(br2);
    divDetailsStore.innerHTML += `ו' וערבי חג:${store.friday}`;
    const br3 = document.createElement("br");
    divDetailsStore.appendChild(br3);
    divDetailsStore.innerHTML += `מוצ"ש: ${store.saturday_night}`;
    const br4 = document.createElement("br");
    divDetailsStore.appendChild(br4);
    divDetailsStore.innerHTML += `כתובת: ${store.address}`;
    const br5 = document.createElement("br");
    divDetailsStore.appendChild(br5);
    divDetailsStore.innerHTML += `כשרות: ${store.kashrut}`;
    divSnif.appendChild(divDetailsStore);
    const divPhoneStore = document.createElement("div");
    divPhoneStore.id = "divPhoneStore";
    const telephon = document.createElement("img");
    telephon.id = "telephon";
    telephon.src = "../image/png002032.png";
    divPhoneStore.appendChild(telephon);
    divPhoneStore.innerHTML = `${store.phone}`;
    const nivut = document.createElement("button");
    nivut.onclick = (e) => { nivutToSnif(store) }
    nivut.id = "bottone1";
    const strong = document.createElement("strong");
    strong.innerHTML = "ניווט לסניף";
    nivut.appendChild(strong);
    divPhoneStore.appendChild(nivut);
    divSnif.appendChild(divPhoneStore);
    const divEmpty = document.createElement("div");
    divEmpty.id = "divEmpty";
    storesContent.appendChild(divEmpty);
    dom.storesContent.appendChild(divStore);
}

const nivutToSnif = (store) => {
    window.location.href = store.nivut;
}


