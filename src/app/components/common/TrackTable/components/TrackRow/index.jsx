import React from 'react';
import PT from 'prop-types';

import { Button, ScPlusIcon, ScCrossIcon } from './styled';
import { Tr, Td, Img } from '../../styled';

const TrackRow = ({
    track: {
        image,
        name,
        artistName,
    },
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
            <Td><Img src={image} alt={name} /></Td>
            <Td>{name}</Td>
            <Td>{artistName}</Td>
            <Td><Button onClick={tableMutateHandler}>{ButtonSvg}</Button></Td>
        </Tr>
    );
};

TrackRow.propTypes = {
    track: PT.shape({
        image: PT.string,
        name: PT.string,
        artistName: PT.string,
    }),
    tableMutateHandler: PT.func,
    mutateButtonType: PT.string,
};

export default TrackRow;
