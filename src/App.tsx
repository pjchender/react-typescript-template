import './App.css';

import Foo from './Foo';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Foo title="React" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
