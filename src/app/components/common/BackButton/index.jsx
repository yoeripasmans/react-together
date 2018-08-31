import React from 'react';
import PT from 'prop-types';
import BackLink from './styled';

const BackButton = ({ value, destination, onClickHandler }) => (

    <BackLink to={destination} onClick={onClickHandler}>{value}</BackLink>
);

BackButton.propTypes = {
    value: PT.string,
    destination: PT.string,
    onClickHandler: PT.func,
};

export default BackButton;
