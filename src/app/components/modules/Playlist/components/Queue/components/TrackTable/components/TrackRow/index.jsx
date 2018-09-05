import React from 'react';
import PT from 'prop-types';

import { Button, ScPlusIcon, ScCrossIcon } from './styled';
import { Tr, Td, TrackImg, UserImg, UserName } from '../../styled';

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
            <Td><TrackImg src={track.album.images[1].url} alt={track.name} /></Td>
            <Td>{track.name}</Td>
            <Td>{track.artists[0].name}</Td>
            <Td>
                <UserImg src={track.addedBy.profilePic || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} />
                <UserName>{track.addedBy.displayName || track.addedBy.username}</UserName>
            </Td>
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
