// var userResult= JSON.parse(localStorage.getItem("score"));
// console.log(userResult)
// var scoreValue=document.querySelector(".scoreValue")
// scoreValue.textContent=`${userResult}`;
// scoreValue.style.color="green"
// console.log(scoreValue)

// var userResult = localStorage.getItem("score");
// var totalQuestions = 10;
// var percentage = (userResult / totalQuestions) * 100;
// var percentContainer = document.querySelector(".percentage-container");
// percentContainer.textContent = percentage + "%";
// var scoreValue = document.querySelector(".scoreValue");
// scoreValue.textContent = userResult;
// //////////////////

var userResult = localStorage.getItem("score");

if (userResult !== null) {
  userResult = Number(userResult);
  var totalQuestions = 10;
  var percentage = (userResult / totalQuestions) * 100;

  var scoreValue = document.querySelector(".scoreValue");
  var percentContainer = document.querySelector(".percentage-container");
  var messageBox = document.querySelector(".result-message");

  percentContainer.textContent = percentage.toFixed(1) + "%";
  scoreValue.textContent = userResult;

  // Choose message and color based on score
  var message = "";
  var color = "";

  if (percentage === 100) {
    message = "Perfect! You nailed every question 🔥";
    color = "#00cc66"; // bright green
  } else if (percentage >= 80) {
    message = "Excellent job! You really know your stuff 👏";
    color = "#33cc33"; // green
  } else if (percentage >= 60) {
    message = "Good work! A bit more practice and you'll ace it 💪";
    color = "#ff9900"; // orange
  } else if (percentage >= 40) {
    message = "Not bad! Keep learning and try again 🙂";
    color = "#ff6600"; // darker orange
  } else {
    message = "Don't worry! Failure is the first step to success. Try again 💫";
    color = "#ff3333"; // red
  }

  // Apply styles
  percentContainer.style.color = color;
  scoreValue.style.color = color;
  messageBox.textContent = message;
  messageBox.style.color = color;
}
