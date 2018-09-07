import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import QrIcon from 'vectors/qr.svg';

import Button from 'common/Button';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const Title = styled.h3`
    margin: 0;
`;


const ActiveUsersHeader = () => (
    <Header>
        <Title>Users</Title>
        <Button Icon={QrIcon} >QR code</Button>
    </Header>
);

export default ActiveUsersHeader;
