import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import Loader from 'common/Loader';
import AddTrackResultsTable from 'common/AddTrackResultsTable';

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
`;

const TopTracks = ({ topTracks, tracksLoaded, addTrackHandler }) => (
    <section>
        <h3>Top Tracks</h3>
        {tracksLoaded ?
            (
                <AddTrackResultsTable
                    tracks={topTracks}
                    mutateButtonType="AddTrack"
                    tableMutateHandler={addTrackHandler}
                />
            ) : (
                <LoaderContainer>
                    <Loader />
                </LoaderContainer>
            )}
    </section>
);

TopTracks.propTypes = {
    topTracks: PT.array,
    tracksLoaded: PT.bool,
    addTrackHandler: PT.func,
};

export default TopTracks;
