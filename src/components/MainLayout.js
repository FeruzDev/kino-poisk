import React from 'react';
import MainNavbar from "./MainNavbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";

const MainLayout = () => {
    return (
        <div>
            {/*<BrowserRouter>*/}
            {/*    <MainNavbar />*/}
            {/*        <Switch>*/}
            {/*           <Route path="/" exact component={Main} />*/}
            {/*           <Route path="/detail/:id" exact component={Detail} />*/}
            {/*        </Switch>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
};

export default MainLayout;