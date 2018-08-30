import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import BackButton from 'common/BackButton';
import SearchBar from 'common/SearchBar';

const Header = styled.header`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const GridDiv1 = styled.div`

`;

const H1 = styled.h1`
    color: #fff;
    font-size: 2.5rem;
`;

const SearchHeader = ({ searchValue, inputOnChangeHandler, inputClearHandler }) => (
    <Header>
        <GridDiv1>
            <BackButton destination="/playlist" value="Back to playlist" />
            <H1>Add songs</H1>
        </GridDiv1>
        <SearchBar
            inputOnChangeHandler={inputOnChangeHandler}
            inputClearHandler={inputClearHandler}
            value={searchValue}
        />
    </Header>
);
SearchHeader.propTypes = {
    searchValue: PT.string,
    inputOnChangeHandler: PT.func.isRequired,
    inputClearHandler: PT.func.isRequired,
};

export default SearchHeader;
