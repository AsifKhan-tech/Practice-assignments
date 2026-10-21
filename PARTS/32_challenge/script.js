// Basic way-1
/*
function getVowelCount(sentence) {
  const array = sentence.toLowerCase().split("");
  console.log(array);

  let countVowel = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] == "a" ||
      array[i] == "e" ||
      array[i] == "i" ||
      array[i] == "o" ||
      array[i] == "u"
    ) {
      countVowel++;
    }
  }
  return countVowel;
}

// Basic+ way - 2

function getVowelCount(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of sentence) {
    console.log(char);

    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}
   */

//Basic++ way - 3

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");

console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonant = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonant.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");

console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");

console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  const trimmedSentence = sentence.trim();
  if (trimmedSentence === "") {
    return 0;
  }
  return trimmedSentence.split(" ").length;
}

const wordCount = getWordCount("I love freeCodeCamp");

console.log(`Word Count: ${wordCount}`);
