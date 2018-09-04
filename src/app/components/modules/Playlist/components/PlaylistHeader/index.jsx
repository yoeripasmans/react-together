import React from 'react';

import PT from 'prop-types';

import BackButton from 'common/BackButton';
import { Header, PlaylistImg, PlaylistName, UserCreated, UserCreatedName, UserCreatedImg } from './styled';


const PlaylistHeader = ({ playlistData }) => (
    <Header>
        <PlaylistImg src="https://i.scdn.co/image/239ec906572231368d8ebd72614094bd3bd10b33" />
        <section>
            <BackButton destination="/playlist" value="Leave playlist" />
            <PlaylistName>{playlistData ? playlistData.name : 'Playlist'}</PlaylistName>
            <UserCreated>
                <UserCreatedName>Created by {playlistData ? playlistData.UserCreated.name : 'Unknown'}</UserCreatedName>
                <UserCreatedImg src="https://i.scdn.co/image/239ec906572231368d8ebd72614094bd3bd10b33" />
            </UserCreated>
        </section>
    </Header>
);


PlaylistHeader.propTypes = {
    playlistData: PT.array,
};

export default PlaylistHeader;
