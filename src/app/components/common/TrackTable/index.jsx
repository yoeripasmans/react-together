import React from 'react';
import PT from 'prop-types';
import TrackCategoryRow from './components/TrackCategoryRow';
import TrackRow from './components/TrackRow';
import { Table } from './styled';

const TrackTable = ({ tracks }) => (
    <Table>
        <thead>
            <TrackCategoryRow />
        </thead>
        <tbody>
            <TrackRow tracks={tracks} />
        </tbody>
    </Table>
);

TrackTable.propTypes = {
    tracks: PT.array,
};

export default TrackTable;
