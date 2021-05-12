import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login, Commute, Admin} from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/commute" component={Commute} />
        <Route path="/adminpage" component={Admin} />
    </Switch>
);


export default Router;