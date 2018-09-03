import React from 'react';
import PT from 'prop-types';

import { Div, Bar1, Bar2, Bar3, Bar4, Bar5, Bar6 } from './styled';


const Loader = ({ className }) => (
    <Div className={className} >
        <Bar1 />
        <Bar2 />
        <Bar3 />
        <Bar4 />
        <Bar5 />
        <Bar6 />
    </Div>
);

Loader.propTypes = {
    className: PT.string,
};

export default Loader;
