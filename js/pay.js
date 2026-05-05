const dom={
    paySubmit:document.querySelector("#paySubmit"),
    exit:document.querySelector(".exit")
}

const userId = JSON.parse(localStorage.getItem("currentUser"));
const users = JSON.parse(localStorage.getItem("users_data"));
const currentUser=JSON.parse(localStorage.getItem("currentUser"));

dom.exit.onclick=(e)=>{
    localStorage.setItem('currentUser',JSON.stringify(-1));
}

dom.paySubmit.onclick=(e)=>{
    users?.forEach(user => {
        if(user.user_id==userId)
        {
            for(let i=0; i<user.basket.length; i++)
            {
                user.basket[i]=null;
            }
        }
    });
    localStorage.setItem("users_data",JSON.stringify(users));
    window.location.href="../html/call.html";
}
