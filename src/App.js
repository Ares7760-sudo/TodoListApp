import logo from './logo.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './views/TodoList/TodoList';
import Nav from './views/Nav/Nav';
import Home from './views/Home/Home';
import Guide from './views/Guide/Guide';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/guide">
            <Guide />
          </Route>
          <Route path="/todo">
          <TodoList />
          </Route>
        </Switch>

        <ToastContainer />

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
