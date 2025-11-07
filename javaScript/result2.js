var userResult2= JSON.parse(localStorage.getItem("score2"));
var scoreValue2=document.querySelector(".scoreValue2")
scoreValue2.textContent=`${userResult2}`;
scoreValue2.style.color="green"

var userResult2 = localStorage.getItem("score2");
var totalQuestions = 10;
var percentage = (userResult / totalQuestions) * 100;
var percentContainer = document.querySelector(".percentage-container2");
percentContainer.textContent = percentage + "%";
var scoreValue2 = document.querySelector(".scoreValue2");
scoreValue2.textContent = userResult2;