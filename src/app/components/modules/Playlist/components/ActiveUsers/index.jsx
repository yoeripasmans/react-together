import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import ActiveUsersHeader from './components/ActiveUsersHeader';
import ActiveUsersList from './components/ActiveUsersList';

const Section = styled.section`
    width: 100%;
    margin: 3rem 0;
`;

const ActiveUsers = ({ userData }) => (
    <Section>
        <ActiveUsersHeader />
        <ActiveUsersList />
    </Section>
);


ActiveUsers.propTypes = {
    userData: PT.array,
};

export default ActiveUsers;
