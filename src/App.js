import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './components/HelloWorld';
import {HigherOrderFunction} from './components/HigherOrderFunction';
import { HigherOrderComponent } from './components/HigherOrderComponent';
import { WrappedMessage } from './components/WrappedMessage';

function App() {
  return (
    <div className="App">
      <h2>Welcome</h2>
      <HelloWorld/>
      <WrappedMessage/>
      <HigherOrderComponent/>
    </div>
  );
}

export default App;
