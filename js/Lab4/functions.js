console.log("1.1 findMinLengthOfThreeWords:");
function findMinLengthOfThreeWords(w1, w2, w3) {
  return Math.min(w1.length, w2.length, w3.length);
}
console.log(findMinLengthOfThreeWords("apple", "cat", "banana"));

console.log("1.2 filterOddElements:");
function filterOddElements(arr) {
  return arr.filter(n => n % 2 !== 0);
}
console.log(filterOddElements([1, 2, 3, 4, 5]));

console.log("1.3 getLengthOfShortestElement:");
function getLengthOfShortestElement(arr) {
  if (arr.length === 0) return 0;
  return Math.min(...arr.map(e => e.length));
}
console.log(getLengthOfShortestElement(["one", "three", "a", "five"]));

console.log("1.4 joinArrayOfArrays:");
function joinArrayOfArrays(arr) {
  return [].concat(...arr);
}
console.log(joinArrayOfArrays([[1,2], [3,4], [5]]));

console.log("1.5 findSmallestNumberAmongMixedElements:");
function findSmallestNumberAmongMixedElements(arr) {
  const numbers = arr.filter(e => typeof e === "number");
  if (numbers.length === 0) return 0;
  return Math.min(...numbers);
}
console.log(findSmallestNumberAmongMixedElements(["x", 4, true, 0, -5]));

console.log("1.6 computeSummationToN:");
function computeSummationToN(n) {
  if (n < 1) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}
console.log(computeSummationToN(4));

console.log("1.7 convertScoreToGrade:");
function convertScoreToGrade(score) {
  if (score > 100 || score < 0) return 'INVALID SCORE';
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  if (score >= 50) return 'E';
  return 'F';
}
console.log(convertScoreToGrade(85));

console.log("1.8 getLongestOfThreeWords:");
function getLongestOfThreeWords(w1, w2, w3) {
  let words = [w1, w2, w3];
  let maxLen = Math.max(w1.length, w2.length, w3.length);
  return words.find(w => w.length === maxLen);
}
console.log(getLongestOfThreeWords("apple", "banana", "pear"));

console.log("1.9 multiply (без *):");
function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < Math.abs(b); i++) {
    result += Math.abs(a);
  }
  return (a < 0 ^ b < 0) ? -result : result;
}
console.log(multiply(3, -4));

console.log("1.10 computeSumBetween:");
function computeSumBetween(a, b) {
  if (a >= b) return 0;
  let sum = 0;
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}
console.log(computeSumBetween(1, 4));
