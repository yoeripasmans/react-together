import React from 'react';
import { Tr, Td, Img } from '../../styled';

const TrackRow = ({ tracks }) => (

    tracks.map(track => (
        <Tr key={track.url}>
            <Td><Img src={track.image} alt={track.name} /></Td>
            <Td>{track.name}</Td>
            <Td>{track.artistName}</Td>
            <Td>0</Td>
        </Tr>))

);

export default TrackRow;
