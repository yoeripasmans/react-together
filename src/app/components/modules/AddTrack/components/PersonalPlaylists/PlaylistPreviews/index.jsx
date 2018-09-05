import React from 'react';
import styled from 'styled-components';

import PlaylistPreview from './PlaylistPreview';

const PlaylistsWrapper = styled.div`
        overflow-x: scroll;
        overflow-y: hidden;
        margin-left: -1rem;
        margin-right: -1rem;
        padding: 0 1rem;
`;
const Ul = styled.ul`
    padding: 0;
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    list-style: none;
    min-width: 60em;
    min-height: 10.16rem;
    padding-right: 1rem;
    box-sizing: border-box;
`;

const PlaylistPreviews = () => (
    <PlaylistsWrapper>
        <Ul>
            <PlaylistPreview
                title="Changes"
                imgSrc="https://lastfm-img2.akamaized.net/i/u/300x300/f34f6ba8b5144bab992de4bda355a9b3.png"
            />
            <PlaylistPreview
                title="Doo wop"
                imgSrc="https://lastfm-img2.akamaized.net/i/u/300x300/f34f6ba8b5144bab992de4bda355a9b3.png"
            />
            <PlaylistPreview
                title="Nas is like hal man halfNas is like hal man halfNas is like hal man half"
                imgSrc="http://www.caminhoxama.org/wp-content/uploads/150-best-album-cover-design-images-on-pinterest-album-cover-design-cd-cover-design.jpg"
            />
            <PlaylistPreview
                title="Yoer maaawwwfackin' weli"
                imgSrc="https://lastfm-img2.akamaized.net/i/u/300x300/f34f6ba8b5144bab992de4bda355a9b3.png"
            />
            <PlaylistPreview
                title="Esketiiiit"
                imgSrc="https://lastfm-img2.akamaized.net/i/u/300x300/f34f6ba8b5144bab992de4bda355a9b3.png"
            />
            <PlaylistPreview
                title="Deze titel is laaaaaaaaaang"
                imgSrc="https://lastfm-img2.akamaized.net/i/u/300x300/f34f6ba8b5144bab992de4bda355a9b3.png"
            />
        </Ul>
    </PlaylistsWrapper>
);

export default PlaylistPreviews;
