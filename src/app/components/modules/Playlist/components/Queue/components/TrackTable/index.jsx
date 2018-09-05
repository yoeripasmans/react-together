import React from 'react';
import PT from 'prop-types';
import TrackCategoryRow from './components/TrackCategoryRow';
import TrackRow from './components/TrackRow';
import { Table } from './styled';

const TrackTable = ({ tracks, mutateButtonType, tableMutateHandler }) => (
    <Table>
        <thead>
            <TrackCategoryRow />
        </thead>
        <tbody>
            {tracks.map(track => (
                <TrackRow
                    key={track.uri}
                    track={track}
                    mutateButtonType={mutateButtonType}
                    tableMutateHandler={tableMutateHandler}
                />
            ))}
        </tbody>
    </Table>
);

TrackTable.propTypes = {
    tracks: PT.array,
    mutateButtonType: PT.string,
    tableMutateHandler: PT.func,
};

export default TrackTable;
