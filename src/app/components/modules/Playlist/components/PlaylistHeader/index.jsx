import React from 'react';

import PT from 'prop-types';

import BackButton from 'common/BackButton';
import { Header, PlaylistImg, PlaylistName, UserCreated, UserCreatedName, UserCreatedImg } from './styled';


const PlaylistHeader = ({ name, createdBy, tracks }) => (
    <Header>
        <PlaylistImg src={tracks.length > 0 ? tracks[0].album.images[1].url : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} />
        <section>
            <BackButton destination="/playlists" value="Leave playlist" />
            <PlaylistName>{name || 'Playlist'}</PlaylistName>
            <UserCreated>
                <UserCreatedName>Created by {createdBy.displayName || createdBy.username || 'Unknown'}</UserCreatedName>
                <UserCreatedImg src={createdBy.profilePic || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} />
            </UserCreated>
        </section>
    </Header>
);


PlaylistHeader.propTypes = {
    name: PT.string,
    createdBy: PT.object,
    tracks: PT.array,
};

export default PlaylistHeader;
