import React from 'react';

import PT from 'prop-types';

import BackButton from 'common/BackButton';
import { Header, PlaylistImg, PlaylistName, UserCreated, UserCreatedName, UserCreatedImg } from './styled';


const PlaylistHeader = ({ name, createdBy }) => (
    <Header>
        <PlaylistImg src="https://i.scdn.co/image/239ec906572231368d8ebd72614094bd3bd10b33" />
        <section>
            <BackButton destination="/playlist" value="Leave playlist" />
            <PlaylistName>{name || 'Playlist'}</PlaylistName>
            <UserCreated>
                <UserCreatedName>Created by {createdBy.displayName || createdBy.username || 'Unknown'}</UserCreatedName>
                <UserCreatedImg src={createdBy.profilePic || 'https://i.scdn.co/image/239ec906572231368d8ebd72614094bd3bd10b3'} />
            </UserCreated>
        </section>
    </Header>
);


PlaylistHeader.propTypes = {
    name: PT.string,
    createdBy: PT.object,
};

export default PlaylistHeader;
