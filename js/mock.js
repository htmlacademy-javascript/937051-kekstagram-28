import { getRandomNumber, getRandomArrayElement } from './util.js';
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

const createComment = (commentId) => ({
  id: commentId,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (photoId) => ({
  id: photoId,
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: Array.from({ length: getRandomNumber(1, 5) }, (_, key) => createComment(key + 1)),
});

const photosList = Array.from({ length: 25 }, (_, key) => createPhoto(key + 1));

export {photosList};
