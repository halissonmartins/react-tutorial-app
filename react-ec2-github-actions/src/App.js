import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto para fazer o deploy na AWS com EC2 e GitHub Actions.
        </p>
      </header>
    </div>
  );
}

export default App;
