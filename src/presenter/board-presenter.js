import { POINT_COUNT } from '../const.js';
import { SortView } from '../view/sort-view.js';
import { ListView } from '../view/list-view.js';
import { EventLineView } from '../view/event-line-view.js';
import { EventEditView } from '../view/event-edit-view.js';
import { ListItemView } from '../view/list-item-view.js';
import { EventHeaderView } from '../view/event-header-view.js';
import { EventDetailsView } from '../view/event-details-view.js';
import { EventOfferView } from '../view/event-offer-view.js';
import { EventDestinationView } from '../view/event-destination-view.js';
import { render } from '../render.js';

class BoardPresenter {
  constructor({ container }) {
    this.container = container;
    this.sortComponent = new SortView();
    this.listComponent = new ListView();
    this.editingItem = new ListItemView();
    this.editingForm = new EventEditView();
    this.editingDetails = new EventDetailsView();
  }

  init() {
    this.renderComponents();
    this.renderEditingViews();
    this.renderEventLines();
  }

  renderComponents() {
    render(this.sortComponent, this.container);
    render(this.listComponent, this.container);
  }

  renderEditingViews() {
    render(this.editingItem, this.listComponent.getElement());
    render(this.editingForm, this.editingItem.getElement());
    render(new EventHeaderView(), this.editingForm.getElement());
    render(this.editingDetails, this.editingForm.getElement());
    render(new EventOfferView(), this.editingDetails.getElement());
    render(new EventDestinationView(), this.editingDetails.getElement());
  }

  renderEventLines() {
    for (let i = 0; i < POINT_COUNT; i++) {
      const newItem = new ListItemView();
      render(newItem, this.listComponent.getElement());
      render(new EventLineView(), newItem.getElement());
    }
  }
}

export { BoardPresenter };
