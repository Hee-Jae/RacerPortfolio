import {NavComponent, Main, Network, Login, GoogleLoginCompnent, Register} from './portfolio/components';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import { persistStore } from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

function App() {

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <NavComponent />
          <Route path="/main" exact>
            <Main />
          </Route>
          <Route path="/network">
            <Network />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/googlelogin">
            <GoogleLoginCompnent />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
