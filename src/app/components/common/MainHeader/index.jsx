import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Logo from 'vectors/logo.svg';

const ExtendedLogo = styled(Logo)`
    width: 180px;
    height: 28px;
`;

const Header = styled.header`
    max-width: 77rem;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 4em;
`;

const MainHeader = ({ userData }) => (
    <Header>
        <ExtendedLogo />
    </Header>
);

MainHeader.propTypes = {
    currentTrack: PT.string,
};

export default MainHeader;
