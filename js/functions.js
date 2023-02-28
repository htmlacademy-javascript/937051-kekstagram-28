const isCorrectLength = (string, maxLength) => string.length <= maxLength;
// console.log(isCorrectLength('проверяемая строка', 10));
isCorrectLength('проверяемая строка', 10);


const isPalindrome = (string) => {
  const inputString = string.toLowerCase().replaceAll(' ', '');
  let outputString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    outputString += inputString.at(i);
  }
  return inputString === outputString;
};
// console.log(isPalindrome('Лёша на полке клопа нашёл '));
isPalindrome('Лёша на полке клопа нашёл ');


const extractNumber = (string) => parseInt(string.toString().replace(/\D/g,''), 10);

extractNumber('1 кефир, 0.5 батона');


const padString = (string, length, padding) => {
  let result = string;
  if (length > string.length) {
    const repeatTimes = Math.floor((length - string.length) / padding.length); // количество целых добавлений
    result = padding.slice(0, length - result.length) + padding.repeat(repeatTimes) + string;
  }
  return result;
};
// console.log(padString('qwerty', 4, '0'));
padString('qwerty', 4, '0');
