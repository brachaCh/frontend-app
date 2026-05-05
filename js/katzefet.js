const usersData = async () => {
    const data = await fetch('../json/users.json');
    const users_data = await data.json();
    users_data?.forEach(user => {
        user.basket.length = 52;
    })
    localStorage.setItem('users_data', JSON.stringify(users_data));
}

usersData();

const currentUser = -1;
localStorage.setItem('currentUser', JSON.stringify(currentUser))

const timeoutId = setTimeout(() => {
    window.location.href = "../html/home.html";
}, 2000);