const dom = {
    exit: document.querySelector(".exit")
}

const timeoutId = setTimeout(() => {
    window.location.href = "../html/send.html";
}, 6000);

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

dom.exit.onclick = (e) => {
    localStorage.setItem('currentUser', JSON.stringify(-1));
}