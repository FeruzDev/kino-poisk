import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss'
import './styles/ForSection.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Main from "./components/Main";
import Detail from "./components/Detail";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*<App />*/}

      <BrowserRouter>
          <MainNavbar />
          <Switch>
              <Route path="/" exact={true} component={Main} />
              <Route path="/detail/:id" exact={true} component={Detail} />
          </Switch>
      </BrowserRouter>
  </>
);

reportWebVitals();
