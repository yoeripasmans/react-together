import React from 'react';

const TrackRow = ({ tracks }) => (

    tracks.map(track => (
        <tr key={track.url}>
            <th><img src={track.image[0]['#text']} alt={track.name} /></th>
            <th>{track.name}</th>
            <th>{track.artist.name}</th>
            <th>0</th>
        </tr>))

);

export default TrackRow;
