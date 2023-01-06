import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppList from "./components/AppList";
import AddApp from "./components/AddApps";
import EditApp from "./components/EditApps";

function App() {
  return (
    <Router>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <AppList />
        </Route>
        <Route path="/add">
          <AddApp />
        </Route>
        <Route path="/edit/:id">
          <EditApp />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
