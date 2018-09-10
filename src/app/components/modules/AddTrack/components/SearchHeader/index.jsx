import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import BackButton from 'common/BackButton';
import SearchBar from 'common/SearchBar';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0 0 4rem 0;
    height: 6rem;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const GridDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `;

const H1 = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    margin: 0;

    @media (max-width: 750px) {
        display: none;
    }
`;

const ExtendedSearchBar = styled(SearchBar)`
    @media (max-width: 750px) {
        width: 100%;
    }
`;

const SearchHeader = ({ searchValue, inputOnChangeHandler, inputClearHandler }) => (
    <Header>
        <GridDiv1>
            <BackButton destination="/playlists" value="Back to playlist" onClickHandler={inputClearHandler} />
            <H1>Add songs</H1>
        </GridDiv1>
        <ExtendedSearchBar
            inputOnChangeHandler={inputOnChangeHandler}
            inputClearHandler={inputClearHandler}
            value={searchValue}
            placeholderValue="Type to search..."
        />
    </Header>
);
SearchHeader.propTypes = {
    searchValue: PT.string,
    inputOnChangeHandler: PT.func.isRequired,
    inputClearHandler: PT.func.isRequired,
};

export default SearchHeader;
