const isCorrectLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const inputString = string.toLowerCase().replaceAll(' ', '');
  let outputString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    outputString += inputString.at(i);
  }
  return inputString === outputString;
};

const extractNumber = (string) => parseInt(string.toString().replace(/\D/g,''), 10);

const padString = (string, length, padding) => {
  let result = string;
  if (length > string.length) {
    const repeatTimes = Math.floor((length - string.length) / padding.length); // количество целых добавлений
    result = padding.slice(0, length - result.length) + padding.repeat(repeatTimes) + string;
  }
  return result;
};


const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, getRandomArrayElement,};
