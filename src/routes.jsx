import React from "react";
import { Route, Router, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store.js";
import App from "./App.jsx";
import Home from "./containers/Home.jsx";
import Test from "./containers/Test.jsx";

// import { checkSession } from './actions/usersAction';
// const checkSesh = () => {
// 	store.dispatch(checkSession());
// }

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
