const questions = [
  {
    category: "coding",
    question: "What is json?",
    choices: [
      "Data format",
      "JavaScript Object Notation",
      "It's used for data exchange",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O",
  },
  {
    category: "Mathematics",
    question: "What is the value of pi (approx)?",
    choices: ["3.14", "2.71", "1.61"],
    answer: "3.14",
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1945", "1939", "1918"],
    answer: "1945",
  },
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(questionObject, computerChoice) {
  if (questionObject.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const question = getRandomQuestion(questions);
console.log("Random question object:", question);

const computerChoice = getRandomComputerChoice(question.choices);
console.log(`Random choice: ${computerChoice}`);

console.log(getResults(question, computerChoice));
