const loginForm = document.querySelector(".login-form");
console.log(loginForm);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailForm = loginForm.elements.email.value.trim();
  const passwordForm = loginForm.elements.password.value.trim();
  let obj = {};

  if (emailForm === "" || passwordForm === "") {
    alert("All form fields must be filled in");
  } else {
    obj = {
      email: emailForm,
      password: passwordForm,
    };
  }

  console.log(obj);
  loginForm.reset();
});

// const btn = document.querySelector(".form-btn");
// console.log(btn);

// btn.addEventListener("mouseover", () => {
//   console.log("test");

//   btn.classList.add("btn-hover");
// });
