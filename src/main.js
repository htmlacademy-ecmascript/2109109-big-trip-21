import { FilterView } from './view/filter-view.js';
import { BoardPresenter } from './presenter/board-presenter.js';
import { render } from './render.js';
import { EventsModel } from './model/events-model.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const content = document.querySelector('.trip-events');
const eventsModel = new EventsModel();

const boardPresenter = new BoardPresenter({
  container: content,
  eventsModel,
});

render(new FilterView(), filtersContainer);
boardPresenter.init();
