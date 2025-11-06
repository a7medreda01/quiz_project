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

      console.log("Saved:", userForm);
    }
  });
});
var userData = JSON.parse(localStorage.getItem("userForm"));
