const POINT_COUNT = 4;
const ROUND_TO_MINUTES = 5;
const MINIMUM_PRICE = 100;
const MAXIMUM_PRICE = 1000;
const SHORT_DATE_FORMAT = 'DD MMM';
const EDITABLE_DATE_FORMAT = 'DD/MM/YY HH:mm';

const PHOTO_SOURCE = 'https://loremflickr.com/248/152?random=';

const PHOTO_BORDER_RANGES = {
  min: 100,
  max: 200,
};

const TIME_LIMITS = {
  HOURS: 24,
  MINUTES: 60,
  DAYS: 31,
};
const PHOTO_COUNT_RANGE = {
  min: 3,
  max: 6,
};

const TRAVEL_TYPES = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];

const DESTINATION_DESCRIPTIONS = {
  Amsterdam:
    'Рекомендуется совершить прогулку на лодке по каналам города и Озеру Любви, однако не надо забывать, что антарктический пояс связывает культурный ландшафт, несмотря на это, обратный обмен болгарской валюты при выезде ограничен.',
  Geneva:
    'Бенгальский залив, куда входят Пик-Дистрикт, Сноудония и другие многочисленные национальные резерваты природы и парки, неравномерен. Добыча жемчуга перевозит подземный сток. Бенгальский залив недоступно иллюстрирует культурный альбатрос.',
  Chamonix:
    'Нижнее течение, на первый взгляд, вразнобой притягивает широкий официальный язык, именно здесь с 8.00 до 11.00 идет оживленная торговля с лодок, нагруженных всевозможными тропическими фруктами, овощами, орхидеями, банками с пивом.',
};

const ADDITIONAL_OFFERS = {
  luggage: 'Add luggage',
  comfort: 'Switch to comfort class',
  meal: 'Add meal',
  seats: 'Choose seats',
  train: 'Travel by train',
};

const OFFER_PRICES = {
  luggage: 30,
  comfort: 100,
  meal: 15,
  seats: 5,
  train: 40,
};

const EVENT_SORT_OPTIONS = {
  Everything: 'Click New Event to create your first point',
  Future: 'There are no future events now',
  Present: 'There are no present events now',
  Past: 'There are no past events now',
};

const DEFAULT_EVENT_FILTER = 'Everything';

export {
  POINT_COUNT,
  TIME_LIMITS,
  ROUND_TO_MINUTES,
  ADDITIONAL_OFFERS,
  OFFER_PRICES,
  MINIMUM_PRICE,
  MAXIMUM_PRICE,
  SHORT_DATE_FORMAT,
  TRAVEL_TYPES,
  EVENT_SORT_OPTIONS,
  DEFAULT_EVENT_FILTER,
  EDITABLE_DATE_FORMAT,
  DESTINATION_DESCRIPTIONS,
  PHOTO_COUNT_RANGE,
  PHOTO_BORDER_RANGES,
  PHOTO_SOURCE,
};
