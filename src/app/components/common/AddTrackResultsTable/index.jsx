import React from 'react';
import PT from 'prop-types';
import TrackCategoryRow from './components/TrackCategoryRow';
import TrackRow from './components/TrackRow';
import { Table } from './styled';

const AddTrackResultsTable = ({ tracks, mutateButtonType, tableMutateHandler }) => (
    <Table>
        <thead>
            <TrackCategoryRow />
        </thead>
        <tbody>
            {tracks.map(track => (
                <TrackRow
                    key={track.url}
                    track={track}
                    mutateButtonType={mutateButtonType}
                    tableMutateHandler={tableMutateHandler}
                />
            ))}
        </tbody>
    </Table>
);

AddTrackResultsTable.propTypes = {
    tracks: PT.array,
    mutateButtonType: PT.string,
    tableMutateHandler: PT.func,
};

export default AddTrackResultsTable;
