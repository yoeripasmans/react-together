import React from 'react';
import PT from 'prop-types';

import SearchIcon from 'images/search.png';
import CloseIcon from 'images/letter-x.png';
import { Div, Input, Img } from './styled';

const SearchBar = ({
    value,
    placeholderValue,
    inputOnChangeHandler,
    inputClearHandler,
}) => (
    <Div>
        <Input onChange={inputOnChangeHandler} placeholder={placeholderValue} value={value} />
        <Img
            alt="Search icon"
            src={!value > 0 ? SearchIcon : CloseIcon}
            onClick={inputClearHandler}

        />
    </Div>
);

SearchBar.propTypes = {
    value: PT.string,
    placeholderValue: PT.string,
    inputOnChangeHandler: PT.func.isRequired,
    inputClearHandler: PT.func.isRequired,
};

export default SearchBar;
