import React from 'react';
import PT from 'prop-types';
import { BackgroundImageContainer, Img } from './styled';

const BackgroundImage = ({ currentTrack }) => (
    <BackgroundImageContainer>
        <Img imgsrc="https://i.scdn.co/image/239ec906572231368d8ebd72614094bd3bd10b33" />
    </BackgroundImageContainer>
);

BackgroundImage.propTypes = {
    currentTrack: PT.string,
};

export default BackgroundImage;
