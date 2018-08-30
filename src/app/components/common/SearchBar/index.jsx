import React from 'react';
import PT from 'prop-types';

import SearchIcon from 'images/search.png';
import CloseIcon from 'images/letter-x.png';
import { Div, Input, Img } from './styled';

const SearchBar = ({ value, onChangeHandler }) => (
    <Div>
        <Input onChange={onChangeHandler} value={value} />
        <Img alt="Search icon" src={!value > 0 ? SearchIcon : CloseIcon} />
    </Div>
);

SearchBar.propTypes = {
    value: PT.string,
    onChangeHandler: PT.func.isRequired,
};

export default SearchBar;
