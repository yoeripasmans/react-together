import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import TrackTable from 'common/TrackTable';
import QueueHeader from './components/QueueHeader';


const Section = styled.section`
    width: 100%;
    margin: 2em 0;
`;

const Queue = ({ tracks }) => (
    <Section>
        <QueueHeader />
        <TrackTable tracks={tracks} />
    </Section>
);


Queue.propTypes = {
    tracks: PT.array,
};

export default Queue;
