import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackIcon from 'images/left-arrow.png';

export default styled(Link)`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    position: relative;
    font-weight: 300;
    margin-left: 25px;

    &:before {
        content: '';
        position: absolute;
        left: -25px;
        height: 0.8em;
        width: 0.8em;
        background-image: url(${BackIcon});
        background-size: cover;
        background-position: center;
        transition: all 0.3s ease-in-out;
    }

    &:hover:before {
        left: -30px;
        transition: all 0.3s ease-in-out;
    }
`;
