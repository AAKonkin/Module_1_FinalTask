import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = { total: 0, donates: [] };
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$total = document.createElement('span');
    this.$total.textContent = this.state.total;
    const h1 = document.createElement('h1');
    h1.className = 'total-amount';
    h1.textContent = 'Итого: $';
    h1.appendChild(this.$total);
    this.$rootElement.appendChild(h1);
  
    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }
  
  onItemCreate(amount) {
    const item = new ListItem({amount: amount, onDelete: this.onItemDelete.bind(this)});
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += Number(amount);
    this.$total.textContent = this.state.total;
  }

  onItemDelete(item) {
    item.$rootElement.remove();
    this.state.total -= Number(item.state.amount);
    this.$total.textContent = this.state.total;
    this.state.donates = this.state.donates.filter(element => {return element.state.id === item.state.id});
  }
}
