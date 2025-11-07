//  //// home

// var fullName = userData.firstName + " " + userData.lastName;
// document.querySelector(".hiHome").textContent = "Welcome " + fullName + " 👋";

///////////////////////quiz

var questions = [
  {
    question: "What does HTML stand for?",
    answer: [
      {
        ans1: "Hyper Text Markup Language",
        ans2: "High Transfer Machine Language",
        ans3: "Hyperlink and Text Management Language",
        ans4: "Home Tool Markup Language",
      },
    ],
    correct: "ans1",
  },
  {
    question: "Which HTML tag is used to display the largest heading?",
    answer: [
      {
        ans1: "<head>",
        ans2: "<h6>",
        ans3: "<h1>",
        ans4: "<header>",
      },
    ],
    correct: "ans3",
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answer: [
      {
        ans1: "<a>",
        ans2: "<link>",
        ans3: "<href>",
        ans4: "<url>",
      },
    ],
    correct: "ans1",
  },
  {
    question: "Which attribute is used to provide an image source in HTML?",
    answer: [
      {
        ans1: "link",
        ans2: "src",
        ans3: "href",
        ans4: "path",
      },
    ],
    correct: "ans2",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answer: [
      {
        ans1: "<break>",
        ans2: "<lb>",
        ans3: "<br>",
        ans4: "<line>",
      },
    ],
    correct: "ans3",
  },
  {
    question: "Which tag is used to display a numbered list?",
    answer: [
      {
        ans1: "<ul>",
        ans2: "<ol>",
        ans3: "<li>",
        ans4: "<dl>",
      },
    ],
    correct: "ans2",
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    answer: [
      {
        ans1: "<img>",
        ans2: "<image>",
        ans3: "<picture>",
        ans4: "<src>",
      },
    ],
    correct: "ans1",
  },
  {
    question: "Which HTML element is used to define a table row?",
    answer: [
      {
        ans1: "<tr>",
        ans2: "<td>",
        ans3: "<th>",
        ans4: "<table>",
      },
    ],
    correct: "ans1",
  },
  {
    question: "Which attribute specifies an alternate text for an image?",
    answer: [
      {
        ans1: "alt",
        ans2: "title",
        ans3: "src",
        ans4: "description",
      },
    ],
    correct: "ans1",
  },
  {
    question: "What is the correct way to comment in HTML?",
    answer: [
      {
        ans1: "// comment",
        ans2: "/* comment */",
        ans3: "<!-- comment -->",
        ans4: "# comment",
      },
    ],
    correct: "ans3",
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
  updateMarkButton();
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
  updateMarkButton();
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
  updateMarkButton();
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

  var userAns = JSON.parse(localStorage.getItem("userAnsower2"));
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
  localStorage.setItem("userAnsower2", JSON.stringify(data1));
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
function calScore2() {
  var answerList = JSON.parse(localStorage.getItem("userAnsower2"));
  for (i = 0; i < 10; i++) {
    // console.log(`${answerList[i]},${questions[i].correct}`)
    if (answerList[i] == questions[i].correct) {
      score += 1;
    }

  }

  localStorage.setItem("score2", JSON.stringify(score));
}
var markedQuestions = [];
var markBtn = document.querySelector(".mark-btn");

function markQuestion() {
  var currentIndex = index;
  var markedBtns = document.querySelectorAll(".marked-btn");

  if (markedQuestions.indexOf(currentIndex) === -1) {
    markedQuestions.push(currentIndex);
    markedBtns[currentIndex].classList.add("marked");
    markBtn.textContent = "Unmark";
  } else {
    var pos = markedQuestions.indexOf(currentIndex);
    markedQuestions.splice(pos, 1);
    markedBtns[currentIndex].classList.remove("marked");
    markBtn.textContent = "Mark";
  }
}
function updateMarkButton() {
  var currentIndex = index;
  if (markedQuestions.indexOf(currentIndex) !== -1) {
    markBtn.textContent = "Unmark";
  } else {
    markBtn.textContent = "Mark";
  }
}

//timer
var totalSeconds = 10 * 60
    var timerElement = document.querySelector(".timerValue");
    var timer = setInterval(() => {
      totalSeconds--;

      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;

      timerElement.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (minutes==9){timerElement.style.color="green"}
        if (minutes<9){timerElement.style.color="blue"}
        if (minutes<5){timerElement.style.color="orange"}
        if (minutes<1){timerElement.style.color="red"}
      if (totalSeconds <= 0) {
        clearInterval(timer);
        timerElement.textContent = "Finshed⏰";
        setTimeout(() => {
          window.location.href = "result.html";
        }, 1000);
      }
    }, 1000);

    var startExamButton = document.querySelector(".startExam")
    if (score >0){
      startExamButton.textContent=""
    }
    //////quiz
