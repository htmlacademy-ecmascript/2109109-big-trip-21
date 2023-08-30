import { FilterView } from './view/filter-view.js'
import { BoardPresenter } from './presenter/board-presenter.js'
import { render } from './render.js'

const initializeApp = () => {
  const filtersContainer = document.querySelector('.trip-controls__filters')
  const content = document.querySelector('.trip-events')

  const boardPresenter = new BoardPresenter({
    container: content,
  })

  render(new FilterView(), filtersContainer)

  boardPresenter.init()
}

initializeApp()
