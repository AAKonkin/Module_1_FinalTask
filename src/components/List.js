import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const h2 = document.createElement('h2');
    h2.className = 'donates-container__title';
    h2.textContent = 'Список донатов';

    this.$listContainer = document.createElement('div');
    this.$listContainer.className = 'donates-container__donates';

    this.$rootElement.append(h2, this.$listContainer);
  }

  addItem(item) {
    this.$rootElement.appendChild(item.$rootElement);
  }
}