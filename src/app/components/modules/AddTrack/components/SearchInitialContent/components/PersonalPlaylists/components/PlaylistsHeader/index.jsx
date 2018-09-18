import React from 'react';
import styled from 'styled-components';
import Button from 'common/Button';

import MusicIcon from 'vectors/music-note.svg';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
`;

const H3 = styled.h3`
        margin: 0;
`;

const ExtendedButton = styled(Button)`
    @media (max-width: 750px) {
        display: none;
    }
`;

const PlaylistsHeader = () => (
    <Header>
        <H3>Personal playlists</H3>
        <ExtendedButton Icon={MusicIcon}>View all</ExtendedButton>
    </Header>
);

export default PlaylistsHeader;
