var userData = JSON.parse(localStorage.getItem("userForm"));
var user = document.querySelector(".nameIn");
var lastNameIn = document.querySelector(".lastNameIn");
var emailIn = document.querySelector(".emailIn");
var passwordIn = document.querySelector(".passwordIn");
var form = document.querySelector(".signUpForm");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      user.value == "" ||
      lastNameIn.value == "" ||
      emailIn.value == "" ||
      passwordIn.value == ""
    ) {
      console.log("data not valid");
    } else {
      var userForm = {
        firstName: user.value,
        lastName: lastNameIn.value,
        email: emailIn.value,
        password: passwordIn.value,
      };
      localStorage.setItem("userForm", JSON.stringify(userForm));
      window.location.href="home.html";
      console.log("Saved:", userForm);
    }
  });
});

// login
var loginEmail = userData.email;
var loginPassword = userData.password;
console.log(loginEmail, loginPassword);
var loginForm = document.querySelector(".loginForm");
var emailLogin = document.querySelector(".emailLogin");
var passwordLogin = document.querySelector(".passwordLogin");
var validationMassage = document.querySelector(".validationMassage");
document.addEventListener("DOMContentLoaded", function () {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      loginEmail == emailLogin.value &&
      loginPassword == passwordLogin.value
    ) {
      console.log("Login Success");
      window.location.href = "home.html";
    } else {
      validationMassage.textContent = "Email or Password not valid";
    }
  });
});


