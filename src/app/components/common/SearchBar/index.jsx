import React from 'react';
import PT from 'prop-types';

import SearchIcon from 'images/search.png';
import CloseIcon from 'images/letter-x.png';
import { Div, Input, Img } from './styled';

const SearchBar = ({
    className,
    value,
    placeholderValue,
    inputOnChangeHandler,
    inputClearHandler,
}) => (
    <Div className={className}>
        <Input onChange={inputOnChangeHandler} placeholder={placeholderValue} value={value} />
        <Img
            alt="Search icon"
            src={!value > 0 ? SearchIcon : CloseIcon}
            onClick={inputClearHandler}

        />
    </Div>
);

SearchBar.propTypes = {
    className: PT.string,
    inputOnChangeHandler: PT.func.isRequired,
    inputClearHandler: PT.func.isRequired,
    placeholderValue: PT.string,
    value: PT.string,
};

export default SearchBar;
