import { Component } from '../core/Component';
import moment from 'moment';

export class ListItem extends Component {
  setup(props) {
    this.state = {id: Date.now(), date: new Date(), amount: props.amount}
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.innerHTML = `${moment(this.state.id).format('DD/MM/YYYY')}, ${moment(this.state.date).format('HH:mm:ss')} - <b>$${this.state.amount}<b>`;
    const delete_btn = document.createElement('button');
    delete_btn.className = 'delete-button';
    delete_btn.textContent = 'Удалить';
    delete_btn.addEventListener('click', (event) => props.onDelete(this));
    this.$rootElement.appendChild(delete_btn);
  }
}