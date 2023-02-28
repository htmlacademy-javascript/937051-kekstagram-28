const DESCRIPTIONS = [
  'Typical me',
  'I was born to shine',
  'I don’t always take a selfie, but when I do…',
  'What do you think of this look?',
  'I woke up like this',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Вероника',
  'Михаил',
  'Платон',
  'Елизавета',
  'Екатерина',
  'Арина',
  'Фёдор',
  'Данила',
  'Артём',
  'Марьяна',
];

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

const createComment = (commentId) => ({
  id: commentId + 1,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (photoId) => ({
  id: photoId + 1,
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: Array.from({ length: getRandomNumber(1, 5) }, (el, key) =>
    createComment(key)
  ),
});

const photosList = Array.from({ length: 25 }, (el, key) => createPhoto(key));

console.log(photosList);
