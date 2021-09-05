import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      number: 0,
    }
  }

  handleChange = ({ target }) => {
    this.setState({number: target.value })
  }

  render() {
    return (
      <div className="App">
      <main>
        <form>
          <label>
            Escolha um número:
          <select value={ this.state.number } onChange={this.handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          </label>
          <br />

          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" />  
          </label>
          <br />
          <label>
            Escreva uma mensagem de saudação:
            <textarea name="mensage" />
          </label>
        </form>
      </main>
      </div>
    )
  }
}

export default App;
