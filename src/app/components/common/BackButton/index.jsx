import React from 'react';
import PT from 'prop-types';
import BackLink from './styled';

const BackButton = ({ value, destination }) => (

    <BackLink to={destination}>{value}</BackLink>
);

BackButton.propTypes = {
    value: PT.string,
    destination: PT.string,
};

export default BackButton;
