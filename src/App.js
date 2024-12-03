import logo from './logo.svg';
import './App.css';
import TodoList from './views/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
