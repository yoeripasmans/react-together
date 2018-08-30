import React from 'react';
import PT from 'prop-types';
import TrackCategoryRow from './components/TrackCategoryRow';
import TrackRow from './components/TrackRow';

const TrackTable = ({ tracks }) => (
    <table>
        <thead>
            <TrackCategoryRow />
        </thead>
        <tbody>
            <TrackRow tracks={tracks} />
        </tbody>
    </table>
);

TrackTable.propTypes = {
    tracks: PT.array,
};

export default TrackTable;
