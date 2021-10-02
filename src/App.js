import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'

const HatsPage = (props) => {
  console.log(props)
  return (
  <div>
    <h1>HATS PAGE</h1>
  </div>
  )
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/:id' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
