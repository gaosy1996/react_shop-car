import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "../views/Home";
import Classify from "../views/Classify";
import ShopCar from '../views/ShopCar'
import My from "../views/My";
import Details from '../views/Details';

function RootRouter() {
    return <Router>
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/classify' component={Classify} />
            <Route path='/shopCar' component={ShopCar} />
            <Route path='/my' component={My} />
            <Route path='/details/:id' component={Details} />
            <Redirect from='/' to='/home' />
        </Switch>
    </Router>
}

export default RootRouter;