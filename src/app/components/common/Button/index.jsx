import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

const ScButton = styled.button`
    display: flex;
    align-items: center;
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 100px;
    cursor: pointer;
    outline: none;

    svg {
        margin-left: 10px;
    }
`;

const Button = ({ children, Icon }) => (
    <ScButton>
        <span>{children}</span>
        {Icon && <Icon />}
    </ScButton>
);

Button.propTypes = {
    children: PT.string,
    Icon: PT.func,
};

export default Button;
