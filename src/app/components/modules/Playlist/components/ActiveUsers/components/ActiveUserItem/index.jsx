import React from 'react';
import PT from 'prop-types';
import { Li, Img, P } from './styled';

const ActiveUserItem = ({
    name,
    username,
    profilePic,
}) => (
    <Li>
        <Img src={profilePic || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} />
        <P>{name || username || 'Guest'}</P>
    </Li>
);


ActiveUserItem.propTypes = {
    profilePic: PT.string,
    name: PT.string,
    username: PT.string,
};

export default ActiveUserItem;
