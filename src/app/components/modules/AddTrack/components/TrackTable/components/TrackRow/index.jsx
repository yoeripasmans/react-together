import React from 'react';
import PT from 'prop-types';

import { Button, ScPlusIcon, ScCrossIcon } from './styled';
import { Tr, Td, Img } from '../../styled';

const TrackRow = ({
    track,
    tableMutateHandler,
    mutateButtonType,
}) => {
    let ButtonSvg = null;
    if (mutateButtonType === 'AddTrack') {
        ButtonSvg = <ScPlusIcon />;
    }
    if (mutateButtonType === 'RemoveTrack') {
        ButtonSvg = <ScCrossIcon />;
    }

    return (
        <Tr>
            <Td><Img src={track.image} alt={track.name} /></Td>
            <Td>{track.name}</Td>
            <Td>{track.artistName}</Td>
            <Td><Button onClick={() => tableMutateHandler(track)}>{ButtonSvg}</Button></Td>
        </Tr>
    );
};

TrackRow.propTypes = {
    track: PT.object,
    tableMutateHandler: PT.func,
    mutateButtonType: PT.string,
};

export default TrackRow;
