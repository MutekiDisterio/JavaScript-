
// 1.1
function computeAreaOfARectangle(length, width) {
  return length * width;
}



// 1.2
function computeAreaOfACircle(radius) {
  return Math.PI * radius * radius;
}

// 1.3

function computePower(num, exponent) {
  return Math.pow(num, exponent);
}



// 1.4
function computeSquareRoot(num) {
  return Math.sqrt(num);
}




// 1.5
function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}


// 1.6
function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}



// 1.7
function getProductOfAllElementsAtProperty(obj, key) {
  const arr = obj[key];
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return arr.reduce((acc, val) => acc * val, 1);
}







// 1.8
function sumDigits(num) {
  const str = Math.abs(num).toString().split('');
  const digits = str.map(Number);
  let sum = digits.reduce((acc, digit) => acc + digit, 0);
  return num < 0 ? -digits[0] + sum - digits[0] : sum;
}


// 1.9
function findShortestWordAmongMixedElements(arr) {
  const words = arr.filter(el => typeof el === 'string');
  if (words.length === 0) return '';
  return words.reduce((shortest, word) => word.length < shortest.length ? word : shortest);
}



// 1.10
function findSmallestNumberAmongMixedElements(arr) {
  const numbers = arr.filter(el => typeof el === 'number');
  if (numbers.length === 0) return '';
  return Math.min(...numbers);
}



// 1.11
function modulo(a, b) {
  if (b === 0 || isNaN(a) || isNaN(b)) return NaN;
  if (a === 0) return 0;
  return a - Math.floor(a / b) * b;
}


// 1.12
function reverseChunks(str, n) {
  if (n <= 1) return str;
  let result = '';
  for (let i = 0; i < str.length; i += n) {
    result += str.substr(i, n).split('').reverse().join('');
  }
  return result;
}



// 1.13
function findOddOrEvenOutlier(arr) {
  const evens = arr.filter(n => n % 2 === 0);
  const odds = arr.filter(n => n % 2 !== 0);
  return evens.length === 1 ? evens[0] : odds.length === 1 ? odds[0] : null;
}





// 1.14
function findPairWithSum(arr, target) {
  const seen = new Set();
  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) return [complement, num];
    seen.add(num);
  }
  return null;
}


// 1.15
function areMirrorStrings(str1, str2) {
  return str1 === str2.split('').reverse().join('');
}





// 1.16
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}




// Ізограма
function isIsogram(str) {
  str = str.toLowerCase();
  const set = new Set(str);
  return set.size === str.length;
}   




// Паліндром
function findPalindromesInSentence(sentence) {
  const words = sentence.toLowerCase().match(/\w+/g) || [];
  return words.filter(word => word === word.split('').reverse().join(''));
}
