import React from 'react';

import PlaylistPreview from './PlaylistPreview';
import { PlaylistsWrapper, Ul } from './styled';

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
                imgSrc="https://lastfm-img2.akamaized.net/i/u/300x300/f34f6ba8b5144bab992de4bda355a9b3.png"
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
