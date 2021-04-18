import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './components/Register';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
          <Route path="/dashboard/:username" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
