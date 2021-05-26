import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login,Admin,Edit, Edit_} from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/adminpage" component={Admin} />
        <Route path="/edit" component={Edit} />
        <Route path="/edit_" component={Edit_} />
    </Switch>
);


export default Router;