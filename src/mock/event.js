import {
  TRAVEL_TYPES,
  DESTINATION_DESCRIPTIONS,
  MAXIMUM_PRICE,
  MINIMUM_PRICE,
  ADDITIONAL_OFFERS,
} from '../const.js';
import {
  getRandomInteger,
  getRandomArrayElement,
  getRandomBoolean,
  getRandomKey,
  formalizeTime,
} from '../utils.js';
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
import dayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(dayjsRandom);
dayjs.extend(dayOfYear);

const generateRandomDate = () => {
  const eventDate = dayjs()
    .dayOfYear(getRandomInteger(1, 365))
    .format('YYYY-MM-DD');
  const eventTime = `${formalizeTime(getRandomInteger(0, 23))}:${formalizeTime(
    Math.floor(getRandomInteger(0, 59) / 5) * 5,
  )}`;
  const endDate = dayjs()
    .dayOfYear(getRandomInteger(dayjs(eventDate).dayOfYear(), 365))
    .format('YYYY-MM-DD');
  const endTime = `${formalizeTime(getRandomInteger(0, 23))}:${formalizeTime(
    Math.floor(getRandomInteger(0, 59) / 5) * 5,
  )}`;
  return {
    date: eventDate,
    startTime: `${eventDate}T${eventTime}`,
    endTime: `${endDate}T${endTime}`,
  };
};

const getRandomOffers = () => {
  const offersCount = getRandomInteger(0, Object.keys(ADDITIONAL_OFFERS).length);
  const offersList = [];
  while (offersList.length < offersCount) {
    const newOffer = getRandomKey(ADDITIONAL_OFFERS);
    if (!offersList.includes(newOffer)) {
      offersList.push(newOffer);
    }
  }
  return offersList;
};

const getNewEntry = () => {
  const { date, startTime, endTime } = generateRandomDate();
  return {
    date,
    eventType: getRandomArrayElement(TRAVEL_TYPES),
    destination: getRandomKey(DESTINATION_DESCRIPTIONS),
    startTime,
    endTime,
    price: getRandomInteger(MINIMUM_PRICE, MAXIMUM_PRICE),
    offers: getRandomOffers(),
    isFav: getRandomBoolean(),
  };
};

export { getNewEntry };
