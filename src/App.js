import logo from './logo.svg';
import Toggle from './components/Toggle';
// import Modal from './components/Modal';
import Drag from './components/Drag';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Toggle btnText="Click me" modalText="Hi I'm in an animated modal" />
      <Drag />
    </div>
  );
}

export default App;
