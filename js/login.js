const dom = {
  bth_enter: document.querySelector("#bth_enter"),
  bth_login: document.querySelector("#bth_login"),
  content: document.querySelector("#content"),
  loginContainer: document.querySelector("#loginContainer"),
  exit: document.querySelector(".exit")
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"))
const users = JSON.parse(localStorage.getItem("users_data"));

dom.exit.onclick = (e) => {
  localStorage.setItem('currentUser', JSON.stringify(-1));
}

dom.bth_enter.onclick = (e) => {
  drewDialogTz();
}

dom.bth_login.onclick = (e) => {
  drewDialogLogin();
}

const drewDialogTz = () => {
  dom.loginContainer.innerHTML = "";
  const form_modal = document.createElement("form");
  form_modal.classList.add("modal");
  form_modal.classList.add("modalId");
  const tz = document.createElement("input");
  tz.type = "text";
  tz.id = "tz";
  tz.required = "true";
  tz.placeholder = "הכנס ת.ז";
  dom.loginContainer.appendChild(form_modal);
  form_modal.appendChild(tz);
  const submit = document.createElement("button");
  submit.textContent = "אישור";
  submit.type = "submit";
  submit.classList.add("btn_submit");
  form_modal.appendChild(submit);
  form_modal.onsubmit = (e) => submitUserEnter(e);
}

const submitUserEnter = (e) => {
  e.preventDefault();
  const index = users?.findIndex((user) =>
    user.user_id == Number(e.target.tz.value)
  );
  if (index != -1) {
    localStorage.setItem("currentUser", Number(e.target.tz.value));
    window.location.href = "productsOrder.html";
  }
  else {
    drewDialogLogin();
  }
};

const drewDialogLogin = () => {
  dom.loginContainer.innerHTML = "";
  const formLogin = document.createElement("form");
  formLogin.classList.add("modal");
  const name = document.createElement("input");
  name.type = "text";
  name.id = "name";
  name.required = "true";
  name.placeholder = "הכנס שם משתמש";
  const tz = document.createElement("input");
  tz.type = "text";
  tz.id = "tz";
  tz.required = "true";
  tz.placeholder = "הכנס ת.ז";
  const address=document.createElement("input");
  address.type="text";
  address.id="address";
  address.placeholder="הכנס כתובת";
  const email = document.createElement("input");
  email.type = "email";
  email.id = "Email";
  email.required = "true";
  email.placeholder = "הכנס אימייל";
  dom.loginContainer.appendChild(formLogin);
  formLogin.appendChild(name);
  formLogin.appendChild(tz);
  formLogin.appendChild(address);
  formLogin.appendChild(email);
  const submit = document.createElement("button");
  submit.textContent = "הרשמה";
  submit.type = submit;
  submit.classList.add("btn_submit");
  formLogin.appendChild(submit);
  formLogin.onsubmit = (e) => submitUser(e);
};

const submitUser = (e) => {
  e.preventDefault();
  console.log("submitUser");
  const newUser = { user_name: e.target.name.value, user_id: Number(e.target.tz.value), user_address:e.target.address.value, user_email: e.target.Email.value, basket: [] };
  const users_data = JSON.parse(localStorage.getItem("users_data"));
  users_data.push(newUser);
  localStorage.setItem("users_data", JSON.stringify(users_data));
  localStorage.setItem("currentUser", newUser.user_id);
  window.location.href = "productsOrder.html";
};
