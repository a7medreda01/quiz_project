// var userResult2= JSON.parse(localStorage.getItem("score2"));
// var scoreValue2=document.querySelector(".scoreValue2")
// scoreValue2.textContent=`${userResult2}`;
// scoreValue2.style.color="green"

// var userResult2 = localStorage.getItem("score2");
// var totalQuestions = 10;
// var percentage = (userResult2 / totalQuestions) * 100;
// var percentContainer = document.querySelector(".percentage-container2");
// percentContainer.textContent = percentage + "%";
// var scoreValue2 = document.querySelector(".scoreValue2");
// scoreValue2.textContent = userResult2;

var userResult2 = localStorage.getItem("score2");

if (userResult2 !== null) {
  userResult2 = Number(userResult2);
  var totalQuestions = 10;
  var percentage2 = (userResult2 / totalQuestions) * 100;

  var scoreValue2 = document.querySelector(".scoreValue2");
  var percentContainer2 = document.querySelector(".percentage-container2");
  var messageBox2 = document.querySelector(".result-message2");

  percentContainer2.textContent = percentage2.toFixed(1) + "%";
  scoreValue2.textContent = userResult2;

  // Choose message and color based on score
  var message2 = "";
  var color2 = "";

  if (percentage2 === 100) {
    message2 = "Perfect! You nailed every question 🔥";
    color2 = "#00cc66"; // bright green
  } else if (percentage2 >= 80) {
    message2 = "Excellent job! You really know your stuff 👏";
    color2 = "#33cc33"; // green
  } else if (percentage2 >= 60) {
    message2 = "Good work! A bit more practice and you'll ace it 💪";
    color2 = "#ff9900"; // orange
  } else if (percentage2 >= 40) {
    message2 = "Not bad! Keep learning and try again 🙂";
    color2 = "#ff6600"; // darker orange
  } else {
    message2 = "Don't worry! Failure is the first step to success. Try again 💫";
    color2 = "#ff3333"; // red
  }

  // Apply styles
  percentContainer2.style.color = color2;
  scoreValue2.style.color = color2;
  messageBox2.textContent = message2;
  messageBox2.style.color = color2;
}
