import React from 'react';
import styled from 'styled-components';

import PlaylistsHeader from './components/PlaylistsHeader';
import PlaylistPreviews from './components/PlaylistPreviews';

const Section = styled.section`
    margin: 2em 0 4em 0;
`;

const PersonalPlaylists = () => (
    <Section>
        <PlaylistsHeader />
        <PlaylistPreviews />
    </Section>
);

export default PersonalPlaylists;
