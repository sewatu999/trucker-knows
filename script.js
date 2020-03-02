// //set up needed document.'s
//

const nextQuestionButton = document.getElementById('nextQuestion');

nextQuestionButton.addEventListener('click', provideQuestion);

const quiz = document.getElementById('quiz');

const qImg = document.getElementById('questionImage');

const question = document.getElementById('question');

const counter = document.getElementById('counter');

const timeGauge = document.getElementById('timeGauge');

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

// function checkAnswer(evt) {
//   //match the events target id to the correct key
//   if (evt.target.correct == questions.correct) {
//     score++;
//     answerIsCorrect();
//     alert('Correct');
//   } else {
//     if (evt.target.correct !== questions.correct) {
//       alert('incorrect');
//     }
//   }
// }

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
    correctChoice: '1899'
  },
  {
    question: 'How many hours can a trucker drive before 10 hour break?',
    choiceA: '8',
    choiceB: '11',
    choiceC: '10',
    correctChoice: '11'
  },
  {
    question: 'Where was the first semi truck created in America?',
    choiceA: 'Cleveland,Oh',
    choiceB: 'Waco,Tx',
    choiceC: 'Willacoochee,Ga',
    correctChoice: 'Cleveland,Oh'
  },
  {
    question: 'How many wheel brakes does a semi truck have?',
    choiceA: '18',
    choiceB: '10',
    choiceC: '16',
    correctChoice: '10'
  },
  {
    question: 'How much of Americas freight is transported by semi trucks?',
    choiceA: '90%',
    choiceB: '60%',
    choiceC: '70%',
    correctChoice: '70%'
  },
  {
    question:
      'How many days would most grocery stores run out of food if trucks stopped?',
    choiceA: '3 days',
    choiceB: '6 days',
    choiceC: '4 days',
    correctChoice: '3 days'
  },
  {
    question: "What's the most popular semi truck in America?",
    choiceA: 'FreightLiner',
    choiceB: 'Peterbilt',
    choiceC: 'Volvo',
    correctChoice: 'FreightLiner'
  },
  {
    question: 'What state was the first autonomous truck driven in?',
    choiceA: 'Colorado',
    choiceB: 'Arizona',
    choiceC: 'California',
    correctChoice: 'Colorado'
  },
  {
    question: 'How heavy can a semi truck be without needing a permit?',
    choiceA: '70,000',
    choiceB: '80,000',
    choiceC: '85,000',
    correctChoice: '80,000'
  }
];

//set function for providing question
let lastQuestion = question.length - 1;
let currentQuestionIndex = 0;

function provideQuestion() {
  let q = questions[currentQuestionIndex];

  question.innerHTML = '<p>' + q.question + '<p>';
  {
    choiceA.innerHTML = 'A.' + q.choiceA;
  }
  {
    choiceB.innerHTML = 'B.' + q.choiceB;
  }
  {
    choiceC.innerHTML = 'C.' + q.choiceC;
  }
  {
    correct.innerHTML = 'correctAnswer' + q.correctAnswer;
  }
  quiz.style.display = 'block';
  currentQuestionIndex = currentQuestionIndex + 1;
}
function checkAnswer(evt) {
  //match the events target id to the correct key
  if (evt.target.choices === correct.choice) {
    return true, alert('Correct');
    {
    }
  } else {
    // if (evt.target.choice == incorrect.choice) {
    return false, alert('Incorrect');
    // }
  }
  console.log(choices);
}

function scoreRender() {
  scoreContainer.style.display = 'block';
  let scorePercent = Math.round((100 * score) / question.lastIndex);
  let img =
    scorePercent >= 70
      ? '/Users/abduljames/sei/projects/trucker-knows/images/kiMKgBreT (1).jpg'
      : scorePercent < 70
      ? '/Users/abduljames/sei/projects/trucker-knows/images/zTX4akXyc.jpg'
      : (scoreContainer.innerHTML =
          "<img src= '+ img +'><p>'+scorePercent+'%</p>");
}
//
// function checkAnswer(answer) {
//   if (questions[currentQuestionIndex].correct == correctAnswer) {
//     score++;
//     console.log(questions);
//     const lastQuestionIndex = lastQuestionIndex[9];
//     // correctAnswer();
//     alert('Correct');
//   } else {
//     // incorrectAnswer();
//     alert('Incorrect');
//   }
//   if (currentQuestionIndex < lastQuestionIndex) {
//     count = 0;
//     currentQuestionIndex++;
//     provideQuestion();
//   } else {
//     scoreRender();
//   }
// }

// function counterRender() {
//   if (count <= questionTime) {
//     counter.innerHTML = count;
//     timeGauge.style.width = gaugeProgressUnit * count + 'px';
//     count++;
//   } else {
//     count = 0;
//     answerIsWrong();
//     if (runningQuestionIndex < lastQuestionIndex) {
//       runningQuestionIndex++;
//       questionRender();
//     } else {
//       clearInterval(timer);
//       scoreRender();
//     }
//   }
//   let timer = setInterval(countRender, 1000);
//   stopRunning: setInterval();
//   clearInterval(timer);
// }

//set of score response for score container
//
// let score = 0;
