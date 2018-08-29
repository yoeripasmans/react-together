import React from 'react';
import styled from 'styled-components';
import TrackTable from 'common/Tracktable';
import QueueHeader from './components/QueueHeader';


const Section = styled.section`
width: 100%;
`;

const Queue = () => (
    <Section>
        <QueueHeader />
        <TrackTable />
    </Section>
);

export default Queue;
