var userResult= JSON.parse(localStorage.getItem("score"));
console.log(userResult)
var scoreValue=document.querySelector(".scoreValue")
scoreValue.textContent=`${userResult}`;
scoreValue.style.color="green"
console.log(scoreValue)