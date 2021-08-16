import logo from './logo.svg';
import {NavComponent, Main, Network, Login} from './portfolio/components';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/network">
          <Network />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
