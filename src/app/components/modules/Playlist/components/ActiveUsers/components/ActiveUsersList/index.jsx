import React from 'react';
import PT from 'prop-types';
import { Ul, Li, Img, P } from './styled';

const ActiveUsersList = ({ userData }) => (
    <Ul>
        <Li>
            <Img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
            <P>Laurenssss fkcing boy</P>
        </Li>
    </Ul>
);


ActiveUsersList.propTypes = {
    userData: PT.array,
};

export default ActiveUsersList;
