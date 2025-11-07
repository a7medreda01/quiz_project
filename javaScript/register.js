var userData = JSON.parse(localStorage.getItem("userForm"));
var user = document.querySelector(".nameIn");
var lastNameIn = document.querySelector(".lastNameIn");
var emailIn = document.querySelector(".emailIn");
var passwordIn = document.querySelector(".passwordIn");
var form = document.querySelector(".signUpForm");

var validationMessage =document.querySelector(".validationMessage")

function validateForm(e) {

    var name = document.getElementById("nameIn").value;
    var validationMessage = document.querySelector(".validationMessage");
    if (name === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";

        return false;
    } else if (isFinite(name)) {
        e.preventDefault();
        validationMessage.textContent = "this field must be characters";
        return false;
    }

    validationMessage.textContent = "";
    return true
}


function validateInputText() {
  var nameInput = document.getElementsByClassName("nameIn")[0]; 
  var validationMessage = document.querySelector(".validationMessage");
  var nameValue = nameInput.value.trim();

  var namePattern = /^[A-Za-z]{0,}$/;

  if (!namePattern.test(nameValue)) {
    validationMessage.textContent = " This field must contain Character only.";
    validationMessage.style.color = "red";
    nameInput.style.border = "2px solid red";
  } else {
    validationMessage.textContent = "";
    nameInput.style.border = "2px solid green";
  }
}

function validateInputText2() {
  var lastNameIn = document.getElementsByClassName("lastNameIn")[0]; 
  var validationMessage = document.querySelector(".validationMessage");
  var nameValue = lastNameIn.value.trim();

  var namePattern = /^[A-Za-z]{0,}$/;

  if (!namePattern.test(nameValue)) {
    validationMessage.textContent = " This field must contain Character only.";
    validationMessage.style.color = "red";
    lastNameIn.style.border = "2px solid red";
  } else {
    validationMessage.textContent = "";
    lastNameIn.style.border = "2px solid green";
  }
}

function validateInputEmail() {
  var emailIn = document.getElementsByClassName("emailIn")[0]; 
  var validationMessage = document.querySelector(".validationMessage");
  var emailValue = emailIn.value.trim();

   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    validationMessage.textContent = " This Email not valid.";
    validationMessage.style.color = "red";
    emailIn.style.border = "2px solid red";
  } else {
    validationMessage.textContent = "";
    emailIn.style.border = "2px solid green";
  }
}

function validateInputPassword() {
  var passIn = document.getElementsByClassName("passwordIn")[0]; 
  var validationMessage = document.querySelector(".validationMessage");
  var passValue = passIn.value.trim();

    var passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(passValue)) {
    validationMessage.textContent = "Password must be at least 8 characters, 1 capital letter & 1 number.";
    validationMessage.style.color = "red";
    passIn.style.border = "2px solid red";
  } else {
    validationMessage.textContent = "";
    passIn.style.border = "2px solid green";
  }
}


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
      window.location.href="login.html";
      console.log("Saved:", userForm);
  var regMessage = document.querySelector(".validationMessage");
    regMessage.textContent = "Register Success";
   regMessage.style.color = "green";    }
    alert("Register Success");
    
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


