import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { HomeWithRedux, Location } from '../views'

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={HomeWithRedux} />
      <Route exact path="/city/:location" component={Location} />
    </Router>
  );
}

export default App;
