// //set up needed document.'s
//

const nextQuestionButton = document.getElementById('nextQuestion');

nextQuestionButton.addEventListener('click', provideQuestion);

const quiz = document.getElementById('quiz');

const question = document.getElementById('question');

const currentQuestion = document.getElementById('currentQuestion');

const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const correct = document.getElementById('correct');
const choice = document.getElementById('choice');

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', checkAnswer));

function checkAnswer(evt) {
  //match the events target id to the correct key
  if (evt.target.id == questions.correct) {
    alert('Correct');
  } else {
    if (evt.target.id !== questions.correct) {
      alert('incorrect');
    }
  }
}
//find a way to compare whats being clicked on to the correct answer.

//If answers match give alert right or if wrong, alert wrong
//
// // make array of questions
let questions = [
  {
    question: 'How many wheels does a semi truck have?',
    choiceA: '10',
    choiceB: '15',
    choiceC: '18',
    correct: 'C'
  },
  {
    question: 'What year was the first semi truck made in US',
    choiceA: '1912',
    choiceB: '1899',
    choiceC: '1890',
    correct: 'B'
  },
  {
    question: 'How many hours can a trucker drive before 10 hour break?',
    choiceA: '8',
    choiceB: '11',
    choiceC: '10',
    correct: 'B'
  },
  {
    question: 'Where was the first semi truck created in America?',
    choiceA: 'Cleveland,Oh',
    choiceB: 'Waco,Tx',
    choiceC: 'Willacoochee,Ga',
    correct: 'A'
  },
  {
    question: 'How many wheel brakes does a semi truck have?',
    choiceA: '18',
    choiceB: '10',
    choiceC: '16',
    correct: 'B'
  },
  {
    question: 'How much of Americas freight is transported by semi trucks?',
    choiceA: '90%',
    choiceB: '60%',
    choiceC: '70%',
    correct: 'C'
  },
  {
    question:
      'How many days would most grocery stores run out of food if trucks stopped?',
    choiceA: '3 days',
    choiceB: '6 days',
    choiceC: '4 days',
    correct: 'A'
  },
  {
    question: "What's the most popular semi truck in America?",
    choiceA: 'FreightLiner',
    choiceB: 'Peterbilt',
    choiceC: 'Volvo',
    correct: 'A'
  },
  {
    question: 'What state was the first autonomous truck driven in?',
    choiceA: 'Colorado',
    choiceB: 'Arizona',
    choiceC: 'California',
    correct: 'A'
  },
  {
    question: 'How heavy can a semi truck be without needing a permit?',
    choiceA: '70,000',
    choiceB: '80,000',
    choiceC: '85,000',
    correct: 'B'
  }
];

//set function for providing question
let lastQuestion = question.length - 1;
let currentQuestionIndex = 0;

function provideQuestion() {
  let q = questions[currentQuestionIndex];
  question.innerHTML = '<p>' + q.question + '<p>';
  choiceA.innerHTML = 'A.' + q.choiceA;
  choiceB.innerHTML = 'B.' + q.choiceB;
  choiceC.innerHTML = 'C.' + q.choiceC;

  quiz.style.display = 'block';
  currentQuestionIndex = currentQuestionIndex + 1;
}
//
//
//set of score response for score container
//
// let score = 0;

// function checkAnswer(answer) {
//     if (questions[currentQuestionIndex].correct == answer) {
//         score++;
//         answerIsCorrect();
//         alert('Correct');
//     } else {
//         answerIsWrong();
//     }
//     if (currentQuestionIndex < lastQuestionIndex) {
//         count = 0;
//         currentQuestionIndex++;
//         provideQuestion();
//     } else {
//         scoreRender();
//     }
// }
