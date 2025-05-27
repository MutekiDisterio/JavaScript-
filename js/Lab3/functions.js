function getProperty(obj, key) {
  return obj[key];
}

function addProperty(obj, key) {
  obj[key] = true;
  return obj[key];
}

function removeProperty(obj, key) {
  delete obj[key];
}

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

function getLengthOfWord(word) {
  return word.length;
}

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

function isEven(num) {
  return num % 2 === 0;
}

function isGreaterThan(num1, num2) {
  return num1 > num2;
}

function isSameLength(word1, word2) {
  return word1.length === word2.length;
}

function isEvenAndGreaterThanTen(num) {
  return num % 2 === 0 && num > 10;
}

function computeAreaOfATriangle(base, height) {
  return 0.5 * base * height;
}
