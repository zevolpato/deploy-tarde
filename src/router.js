import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';

export default function Routes(){
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/main" exact component={Main} />
            </Switch>
        </BrowserRouter>
        


);
}