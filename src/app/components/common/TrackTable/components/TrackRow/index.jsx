import React from 'react';
import { Tr, Td, Img } from '../../styled';

const TrackRow = ({ tracks }) => (

    tracks.map(track => (
        <Tr key={track.name}>
            <Td><Img src={track.image[0]['#text']} alt={track.name} /></Td>
            <Td>{track.name}</Td>
            <Td>{track.artist.name}</Td>
            <Td>0</Td>
        </Tr>))

);

export default TrackRow;
