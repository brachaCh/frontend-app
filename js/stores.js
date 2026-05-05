const dom = {
    divStoresContent: document.querySelector("#divStoresContent"),
    exit: document.querySelector(".exit"),
    InputContainer: document.querySelector(".InputContainer"),
    inputSearchStores: document.getElementById('inputSearchStores')
};

const currentUser1 = JSON.parse(localStorage.getItem("currentUser"));
const stores = JSON.parse(localStorage.getItem("stores_data"));

dom.exit.onclick = (e) => {
    localStorage.setItem('currentUser', JSON.stringify(-1));
}

const drewStore = (store) => {
    const divStore = document.createElement("div");
    divStore.id = "divStore";
    const br_open = document.createElement("br");
    divStore.appendChild(br_open);
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
    divStoresContent.appendChild(divEmpty);
    dom.divStoresContent.appendChild(divStore);
}

const nivutToSnif = (store) => {
    window.location.href = store.nivut;
}

const drewStores = () => {
    stores?.forEach(store => {
        drewStore(store);
    });
}

drewStores();

const drewSomeStores = (arrStores) => {
    arrStores?.forEach(nameStore => {
        stores?.forEach(store => {
            if (store.name == nameStore)
                drewStore(store);
        })
    });
}

dom.inputSearchStores.onchange = (e) => {
    debugger
    if (e.target.value == "הכל") {
        divStoresContent.innerHTML = "";
        drewStores();
    }
    else {
        let arrayStores = []
        stores?.forEach(store => {
            if (store.city == e.target.value)
                arrayStores.push(store.name)
        });
        dom.divStoresContent.innerHTML = "";
        arrayStores.length == 0 ? dom.divStoresContent.innerHTML += "לא נמצאו סניפים באזורך" : drewSomeStores(arrayStores);
    }
}