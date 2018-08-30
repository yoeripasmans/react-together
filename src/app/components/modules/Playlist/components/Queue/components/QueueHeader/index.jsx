import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 2em;
`;

const Title = styled.h3`
    margin: 0;
`;

const QueueHeader = () => (
    <Header>
        <Title>Queue</Title>
    </Header>
);

export default QueueHeader;
