var userResult= JSON.parse(localStorage.getItem("score"));
console.log(userResult)
var scoreValue=document.querySelector(".scoreValue")
scoreValue.textContent=`${userResult}`;
scoreValue.style.color="green"
console.log(scoreValue)

var userResult = localStorage.getItem("score");
var totalQuestions = 10;
var percentage = (userResult / totalQuestions) * 100;
var percentContainer = document.querySelector(".percentage-container");
percentContainer.textContent = percentage + "%";
var scoreValue = document.querySelector(".scoreValue");
scoreValue.textContent = userResult;
//////////////////
