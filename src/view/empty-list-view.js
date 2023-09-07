import { DEFAULT_EVENT_FILTER, EVENT_SORT_OPTIONS } from '../const.js';
import { createElement } from '../render.js';

function createEmptyListTemplate(filter = DEFAULT_EVENT_FILTER) {
  return `<p class="trip-events__msg">
      ${EVENT_SORT_OPTIONS[filter]}
    </p>`;
}

class EmptyListView {
  constructor(filter) {
    this.filter = filter;
  }

  getTemplate() {
    return createEmptyListTemplate(this.filter);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  deleteElement() {
    this.element.remove();
  }
}

export { EmptyListView };
