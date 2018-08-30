import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Playlist from 'modules/Playlist';
import AddTrack from 'modules/AddTrack';

const App = () => (
    <main>
        <Switch>
            <Route path="/playlist" component={Playlist} exact />
            <Route path="/search" component={AddTrack} exact />
            <Redirect from="/" to="/playlist" exact />
        </Switch>
    </main>
);

export default App;
