


//  //// home

// var fullName = userData.firstName + " " + userData.lastName;
// document.querySelector(".hiHome").textContent = "Welcome " + fullName + " 👋";

///////////////////////quiz

var questions = [
  {
    question: "What is the capital city of France?",
    answer: [
      {
        ans1: "Berlin",
        ans2: "Madrid",
        ans3: "Paris",
        ans4: "Rome",
      },
    ],
    correct: "ans3",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: [
      {
        ans1: "Earth",
        ans2: "Mars",
        ans3: "Jupiter",
        ans4: "Venus",
      },
    ],
    correct: "ans2",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: [
      {
        ans1: "William Shakespeare",
        ans2: "Charles Dickens",
        ans3: "Leo Tolstoy",
        ans4: "Mark Twain",
      },
    ],
    correct: "ans1",
  },
  {
    question: "Which ocean is the largest in the world?",
    answer: [
      {
        ans1: "Atlantic Ocean",
        ans2: "Indian Ocean",
        ans3: "Pacific Ocean",
        ans4: "Arctic Ocean",
      },
    ],
    correct: "ans3",
  },
  {
    question: "What is the chemical symbol for water?",
    answer: [
      {
        ans1: "O2",
        ans2: "H2O",
        ans3: "CO2",
        ans4: "NaCl",
      },
    ],
    correct: "ans2",
  },
  {
    question: "How many continents are there on Earth?",
    answer: [
      {
        ans1: "5",
        ans2: "6",
        ans3: "7",
        ans4: "8",
      },
    ],
    correct: "ans3",
  },
  {
    question: "Which language is used to style web pages?",
    answer: [
      {
        ans1: "HTML",
        ans2: "CSS",
        ans3: "JavaScript",
        ans4: "Python",
      },
    ],
    correct: "ans2",
  },
  {
    question: "What is the freezing point of water?",
    answer: [
      {
        ans1: "0°C",
        ans2: "32°C",
        ans3: "100°C",
        ans4: "-10°C",
      },
    ],
    correct: "ans1",
  },
  {
    question: "Which gas do humans need to breathe?",
    answer: [
      {
        ans1: "Carbon Dioxide",
        ans2: "Oxygen",
        ans3: "Hydrogen",
        ans4: "Nitrogen",
      },
    ],
    correct: "ans2",
  },
  {
    question: "Which country is famous for the Great Wall?",
    answer: [
      {
        ans1: "India",
        ans2: "China",
        ans3: "Japan",
        ans4: "Korea",
      },
    ],
    correct: "ans2",
  },
];

var questionText = document.querySelector(".questionText");

var ans1 = document.querySelector(".ans1");
var ans2 = document.querySelector(".ans2");
var ans3 = document.querySelector(".ans3");
var ans4 = document.querySelector(".ans4");

var index = 0;
questionText.textContent = `${index + 1}. ${questions[index].question}`;
ans1.textContent = `A.  ${questions[index].answer[0].ans1}`;
ans2.textContent = `B.  ${questions[index].answer[0].ans2}`;
ans3.textContent = `C.  ${questions[index].answer[0].ans3}`;
ans4.textContent = `D.  ${questions[index].answer[0].ans4}`;

function nextQuestion() {
  index == questions.length - 1 ? (index = 0) : index++;
  // console.log(questions[index].question);
  // console.log(questions[index].answer[0].ans1);

  questionText.textContent = `${index + 1}. ${questions[index].question}`;
  ans1.textContent = `A.  ${questions[index].answer[0].ans1}`;
  ans2.textContent = `B.  ${questions[index].answer[0].ans2}`;
  ans3.textContent = `C.  ${questions[index].answer[0].ans3}`;
  ans4.textContent = `D.  ${questions[index].answer[0].ans4}`;

  var buttonOthers = document.querySelectorAll(".numBtn");

  buttonOthers.forEach((btn) => {
    btn.style.backgroundColor = "lightgray";
    buttonOthers[index].style.backgroundColor = "green";
  });
}

function previousQuestion() {
  index == 0 ? (index = questions.length - 1) : (index -= 1);
  console.log(questions[index].question);
  console.log(questions[index].answer[0].ans1);

  questionText.textContent = `${index + 1}. ${questions[index].question}`;
  ans1.textContent = `A.  ${questions[index].answer[0].ans1}`;
  ans2.textContent = `B.  ${questions[index].answer[0].ans2}`;
  ans3.textContent = `C.  ${questions[index].answer[0].ans3}`;
  ans4.textContent = `D.  ${questions[index].answer[0].ans4}`;

  var buttonOthers = document.querySelectorAll(".numBtn");

  buttonOthers.forEach((btn) => {
    btn.style.backgroundColor = "lightgray";
    buttonOthers[index].style.backgroundColor = "green";
  });
}
function buttonNumQuestion(id) {
  index = id - 1;
  // index==0 ? index=questions.length-1 : index = id-1

  questionText.textContent = `${id}. ${questions[index].question}`;
  ans1.textContent = `A.  ${questions[index].answer[0].ans1}`;
  ans2.textContent = `B.  ${questions[index].answer[0].ans2}`;
  ans3.textContent = `C.  ${questions[index].answer[0].ans3}`;
  ans4.textContent = `D.  ${questions[index].answer[0].ans4}`;
  var buttonOthers = document.querySelectorAll(".numBtn");

  buttonOthers.forEach((btn) => (btn.style.backgroundColor = "lightgray"));
  buttonOthers[index].style.backgroundColor = "green";
}

var buttonOthers = document.querySelectorAll(".numBtn");

buttonOthers.forEach((btn) => {
  btn.style.backgroundColor = "lightgray";
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "green";
  });
});

//part 2 >> save ansower
var data1 = [];
function resetColorButton() {
  var ansowerButtons = document.querySelectorAll(".answerBtn");

  var userAns = JSON.parse(localStorage.getItem("userAnsower"));
  console.log(userAns[4]);

  ansowerButtons.forEach((btn) => {
    btn.style.backgroundColor = "white";
    btn.addEventListener("click", () => {
      // btn.style.backgroundColor = "green";
    });
  });
  var ansowerbb = userAns[index];
  console.log(ansowerbb[0]);
  var ansowerButton = document.querySelector(`.${ansowerbb[0]}`);

  ansowerButton.style.backgroundColor = "green";
}

function selectAnsower(ans) {
  data1[index] = [ans];
  localStorage.setItem("userAnsower", JSON.stringify(data1));
   var ansowerButton = document.querySelector(`.${ans}`);
  var ansowerButtons = document.querySelectorAll(".answerBtn");

  ansowerButtons.forEach((btn) => {
    btn.style.backgroundColor = "white";
    // btn.addEventListener("click", () => {
      ansowerButton.style.backgroundColor = "green";
    // });
  });

  var ansowerbb = data1[index + 1];
  console.log(ansowerbb[index]);
  var ansowerButton = document.querySelector(`.${ansowerbb[index]}`);

  ansowerButton.style.backgroundColor = "green";
}
var score = 0;
function calScore() {
  var answerList = JSON.parse(localStorage.getItem("userAnsower"));
  for (i = 0; i < 10; i++) {
    // console.log(`${answerList[i]},${questions[i].correct}`)
    if (answerList[i] == questions[i].correct) {
      score += 1;
    }
  }

  localStorage.setItem("score", JSON.stringify(score));
}

var markedQuestions = [];
var markBtn = document.querySelector(".mark-btn");

function markQuestion() {
  var currentIndex = index;
  var buttonList = document.querySelectorAll(".numBtn");

  if (markedQuestions.indexOf(currentIndex) === -1) {
    markedQuestions.push(currentIndex);
    buttonList[currentIndex].classList.add("marked");
    markBtn.textContent = "Unmark";
  } else {
    var pos = markedQuestions.indexOf(currentIndex);
    markedQuestions.splice(pos, 1);
    buttonList[currentIndex].classList.remove("marked");
    markBtn.textContent = "Mark";
  }
}
// // --------- Marked List ------
// var markBtn = document.querySelector(".mark-btn");
// var markedList = document.querySelector(".marked-list");

