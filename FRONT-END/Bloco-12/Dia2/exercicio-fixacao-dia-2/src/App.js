import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      number: 0,
      name: '',
      email: '',
      mensage: '',
      react: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    })
  }

  handleFiles = () => {
  }

  render() {
    return (
      <div className="App">
      <main>
        <form>
          <label>
            Escolha um número:
          <select name="number" value={ this.state.number } onChange={this.handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          </label>
          <br />
          <fieldset>
          <label>
            Nome:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />  
          </label>
          </fieldset>
          <br />
          <label>
            Escreva uma mensagem de saudação:
            <textarea name="mensage" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Você aceita os termos?
            <input type="checkbox" name="react" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Enviar arquivo:
            <input type="file" onChange={this.handleFiles} />
          </label>
        </form>
      </main>
      </div>
    )
  }
}

export default App;
