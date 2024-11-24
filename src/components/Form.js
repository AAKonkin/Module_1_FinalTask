import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = { amount: ''};
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
  
    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = 'Введите сумму в $';

    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.name = 'amount';
    this.$input.type = 'number';
    this.$input.max = 100;
    this.$input.min = 1;
    this.$input.required = true;
    this.$input.addEventListener('input', (event) => this.handleInput.bind(this)(event));
    label.appendChild(this.$input);

    this.$button = document.createElement('button');
    this.$button.className = 'donate-form__submit-button';
    this.$button.type = 'submit';
    this.$button.disabled = true;
    this.$button.textContent = 'Задонатить';
    
    this.$rootElement.addEventListener('submit', (event) => this.handleSubmit.bind(this)(event));

    this.$rootElement.append(label, this.$button);
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$button.disabled = this.isValid ? false : true;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      console.log('amount',this.state.amount)
      this.props.onSubmit(this.state.amount);
      this.$input.value = this.state.amount = '';
    }
  }

  get isValid() {
    return (this.state.amount > 0 && this.state.amount <=100) ? true : false;
  }
}
