import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Agrega aquí más rutas según sea necesario */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
