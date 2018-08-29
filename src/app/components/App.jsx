import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'modules/Home';

const App = () => (
    <main>
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    </main>
);

export default App;
