import React from 'react';
import styled from 'styled-components';
import QueueHeader from './components/QueueHeader';

const Section = styled.section`
width: 100%;
`;

const Queue = () => (
    <Section>
        <QueueHeader />
    </Section>
);

export default Queue;
