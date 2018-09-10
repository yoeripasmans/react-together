import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlaylistsOverview from 'modules/PlaylistsOverview';
import Playlist from 'modules/Playlist';
import AddTrack from 'modules/AddTrack';

const App = () => (
    <main>
        <Switch>
            <Route path="/playlists" component={PlaylistsOverview} exact />
            <Route path="/playlist/:id" component={Playlist} exact />
            <Route path="/search" component={AddTrack} exact />
            <Redirect from="/" to="/playlists" exact />
        </Switch>
    </main>
);

export default App;
