// //set up needed document.'s
//

const nextQuestionButton = document.getElementById('nextQuestion');

nextQuestionButton.addEventListener('click', provideQuestion);

const quiz = document.getElementById('quiz');

const qImg = document.getElementById('questionImage');

const question = document.getElementById('question');

const counter = document.getElementById('counter');

// const timeGauge = document.getElementById('timeGauge');

const currentQuestion = document.getElementById('currentQuestion');

const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const correctAnswer = document.getElementById('correct');
// const choice = document.getElementById('choice');

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', checkAnswer));

const progress = document.getElementById('progress');

const scoreContainer = document.getElementById('scoreContainer');

let score = 0;
const scoreDisplay = document.getElementById('score');
scoreDisplay.innerText = score;

function increaseScore() {
  //increment score by ten each time
  score += 10;
  scoreDisplay.innerText = score;
}

function reduceScore() {
  score -= 10;
  scoreDisplay.innerText = score;
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
    correctChoice: 'C'
  },
  {
    question: 'What year was the first semi truck made in US',
    choiceA: '1912',
    choiceB: '1899',
    choiceC: '1890',
    correctChoice: 'B'
  },
  {
    question: 'How many hours can a trucker drive before 10 hour break?',
    choiceA: '8',
    choiceB: '11',
    choiceC: '10',
    correctChoice: 'B'
  },
  {
    question: 'Where was the first semi truck created in America?',
    choiceA: 'Cleveland,Oh',
    choiceB: 'Waco,Tx',
    choiceC: 'Willacoochee,Ga',
    correctChoice: 'A'
  },
  {
    question: 'How many wheel brakes does a semi truck have?',
    choiceA: '18',
    choiceB: '10',
    choiceC: '16',
    correctChoice: 'B'
  },
  {
    question: 'How much of Americas freight is transported by semi trucks?',
    choiceA: '90%',
    choiceB: '60%',
    choiceC: '70%',
    correctChoice: 'C'
  },
  {
    question:
      'How many days would most grocery stores run out of food if trucks stopped?',
    choiceA: '3 days',
    choiceB: '6 days',
    choiceC: '4 days',
    correctChoice: 'A'
  },
  {
    question: "What's the most popular semi truck in America?",
    choiceA: 'FreightLiner',
    choiceB: 'Peterbilt',
    choiceC: 'Volvo',
    correctChoice: 'A'
  },
  {
    question: 'What state was the first autonomous truck driven in?',
    choiceA: 'Colorado',
    choiceB: 'Arizona',
    choiceC: 'California',
    correctChoice: 'A'
  },
  {
    question: 'How heavy can a semi truck be without needing a permit?',
    choiceA: '70,000',
    choiceB: '80,000',
    choiceC: '85,000',
    correctChoice: 'B'
  }
];

//set function for providing question
let lastQuestion = question.length - 1;
let currentQuestionIndex = 0;

//first get the div
let welcomeDiv = document.getElementById('welcome');

function provideQuestion() {
  welcomeDiv.style.display = 'none';
  if (currentQuestionIndex < questions.length) {
    let q = questions[currentQuestionIndex];
    question.innerHTML = '<p>' + q.question + '<p>';

    choiceA.innerHTML = 'A.' + q.choiceA;

    choiceB.innerHTML = 'B.' + q.choiceB;

    choiceC.innerHTML = 'C.' + q.choiceC;

    currentQuestionIndex++;
  }

  if (currentQuestionIndex === questions.length) {
    quiz.style.display = 'none';
    let results = document.createElement('div');
    results.innerText = `Your final score is ${score}%`;
    scoreContainer.appendChild(results);
    let resultsImage = document.createElement('img');
    resultsImage.src =
      score >= 70 ? 'images/kiMKgBreT(1).jpg' : 'images/zTX4akXyc.jpg';
    resultsImage.alt = 'Results emoji';
    resultsImage.setAttribute('width', '100px');
    scoreContainer.appendChild(resultsImage);
    let refreshButton = document.createElement('button');
    refreshButton.innerText = 'Play Again';
    refreshButton.style.display = 'block';
    refreshButton.addEventListener('click', () => location.reload());
    scoreContainer.appendChild(refreshButton);
  }
}
function checkAnswer(evt) {
  //match the events target id to the correct key
  if (evt.target.id === questions[currentQuestionIndex - 1].correctChoice) {
    alert('Correct, nextQuestion'), increaseScore();
  } else {
    alert('InCorrect, nextQuestion'), reduceScore(-10);
  }
}

function scoreRender() {
  scoreContainer.style.display = 'block';
  let scorePercent = Math.round((100 * score) / question.lastQuestionIndex);
  let img = scorePercent >= 70;
  console.log('you finished the game')
    ? '/images/kiMKgBreT(1).jpg'
    : scorePercent < 70
    ? '/images/zTX4akXyc.jpg'
    : (scoreContainer.innerHTML =
        "<img src= '+ img +'><p>'+scorePercent+'%</p>");
}
