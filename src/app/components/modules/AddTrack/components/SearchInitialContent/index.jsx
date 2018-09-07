import React, { Fragment } from 'react';
import PT from 'prop-types';

import PersonalPlaylists from './components/PersonalPlaylists';
import TopTracks from './components/TopTracks';

const SearchInitialContent = ({ topTracks, tracksLoaded, addTrackHandler }) => (
    <Fragment>
        <PersonalPlaylists />
        <TopTracks
            topTracks={topTracks}
            tracksLoaded={tracksLoaded}
            tableMutateHandler={addTrackHandler}
        />
    </Fragment>
);

SearchInitialContent.propTypes = {
    topTracks: PT.array,
    tracksLoaded: PT.bool,
    addTrackHandler: PT.func,
};

export default SearchInitialContent;
