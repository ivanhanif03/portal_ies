// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppList from "./components/AppList";
import AddApp from "./components/AddApps";
import EditApp from "./components/EditApps";
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="container">
        <Fragment>
          <Routes>
            <Route exact path="/" element={<AppList />} />
            <Route path="/add" element={<AddApp />} />
            <Route path="/edit/:id" element={<EditApp />} />
          </Routes>
        </Fragment>
      </div>
    </Router >
  );
}

export default App;
