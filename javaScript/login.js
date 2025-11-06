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
