import logo from './waterlogo.gif';
import './App.css';
import Counter from './test-useState/Counter'
import Todos from './test-customer-hook/Todos';
import ThemesContextHook from './test-useContext/ThemesContextHook';
import ReducerCounter from './test-useReducer/ReducerCounter';
import UseCallbackHook from './test-useCallBack/useCallback-hook';
import TextInputWithFocusButton from './test-useRef/TextInputWithFocusButton';
import FancyInputParent from './test-useImperativeHandle/FancyInputParent';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Todos />
        <ThemesContextHook />
        <ReducerCounter />
        <UseCallbackHook />
        <TextInputWithFocusButton />
        <FancyInputParent />
      </header>
    </div>
  );
}

export default App;
