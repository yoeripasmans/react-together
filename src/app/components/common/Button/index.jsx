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

    :hover {
        background: rgba(0, 0, 0, 0.1);
        transition: background .3s;
    }

    svg {
        margin-left: 1rem;
    }
`;

const Button = ({ buttonClickHandler, children, Icon }) => (
    <ScButton onClick={buttonClickHandler} >
        <span>{children}</span>
        {Icon && <Icon />}
    </ScButton>
);

Button.propTypes = {
    buttonClickHandler: PT.func,
    children: PT.string,
    Icon: PT.func,
};

export default Button;
