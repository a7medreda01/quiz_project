// var currentQuestion = 0; 

// function showQuestion() {
//   questionText.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`;

//   ans1.textContent = `A.  ${questions[currentQuestion].answer[0].ans1}`;
//   ans2.textContent = `B.  ${questions[currentQuestion].answer[0].ans2}`;
//   ans3.textContent = `C.  ${questions[currentQuestion].answer[0].ans3}`;
//   ans4.textContent = `D.  ${questions[currentQuestion].answer[0].ans4}`;
//   var buttonOthers = document.querySelectorAll(".numBtn");
//   buttonOthers.forEach(function (btn) {
//     btn.style.backgroundColor = "lightgray";
//   });
//   if (buttonOthers[currentQuestion]) {
//     buttonOthers[currentQuestion].style.backgroundColor = "green";
//   }
// }
// function nextQuestion() {
//   currentQuestion == questions.length - 1 ? (currentQuestion = 0) : currentQuestion++;
//   showQuestion();
// }

// function previousQuestion() {
//   currentQuestion == 0 ? (currentQuestion = questions.length - 1) : currentQuestion--;
//   showQuestion();
// }

// function buttonNumQuestion(id) {
//   currentQuestion = id - 1;
//   showQuestion();
// }

// result

    var Presence =document.querySelector(".Presence")
  var score = JSON.parse(localStorage.getItem("score"));

    Presence.textContent=`${score} from 10`;
var examButton =document.querySelector(".startExam")
if (score>0){
    examButton.textContent=`Your score : ${score} `
examButton.style.color="red"

}
  var score2 = JSON.parse(localStorage.getItem("score2"));

var examButton2 =document.querySelector(".startExam2")
if (score2>0){
    examButton2.textContent=`Your score : ${score2} `
examButton2.style.color="red"
examButton2.style.textDecoration = "none";


}
var totalScore=score+score2;
var Test=document.querySelector(".Test")
Test.textContent=totalScore
