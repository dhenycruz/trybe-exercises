import logo from './logo.svg';
import './App.css';
import Cardlist from './cards';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['JSX', 'ReactDOM.render', 'CSS e Import'];

function App() {
  return (
    <div>
      <ol>
        {compromissos.map((value) => task(value))}
      </ol>
      <Cardlist />
    </div>
   /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
