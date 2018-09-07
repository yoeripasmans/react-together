import React from 'react';
import PT from 'prop-types';

import { Td, ImgTd, NameTd, ArtistTd, ButtonTd, ExtendedTr, Button, ScPlusIcon, ScCrossIcon, Img } from './styled';
import { Tr } from '../../styled';


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
        <ExtendedTr>
            <ImgTd><Img src={track.image} alt={track.name} /></ImgTd>
            <NameTd>{track.name}</NameTd>
            <ArtistTd>{track.artistName}</ArtistTd>
            <ButtonTd><Button onClick={() => tableMutateHandler(track)}>{ButtonSvg}</Button></ButtonTd>
        </ExtendedTr>
    );
};

TrackRow.propTypes = {
    track: PT.object,
    tableMutateHandler: PT.func,
    mutateButtonType: PT.string,
};

export default TrackRow;
