import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import TrackTable from 'common/TrackTable';
import QueueHeader from './components/QueueHeader';


const Section = styled.section`
    width: 100%;
    margin: 2em 0;
`;

const Queue = ({ tracks, tableMutateHandler }) => (
    <Section>
        <QueueHeader />
        <TrackTable
            tracks={tracks}
            mutateButtonType="RemoveTrack"
            tableMutateHandler={tableMutateHandler}
        />
    </Section>
);


Queue.propTypes = {
    tracks: PT.array,
    tableMutateHandler: PT.func,
};

export default Queue;
