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

const PlaylistsHeader = () => (
    <Header>
        <h3>Personal playlists</h3>
        <Button Icon={MusicIcon}>View all</Button>
    </Header>
);

export default PlaylistsHeader;
