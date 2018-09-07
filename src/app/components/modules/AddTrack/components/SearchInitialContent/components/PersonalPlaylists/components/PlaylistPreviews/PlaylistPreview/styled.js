import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Li = styled.li`
    width: 100%;
    position: relative;
`;
export const Img = styled.img`
    width: 100%;
`;
export const ImgContainer = styled.figure`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.3);
    margin: 0 0 0.4rem 0;
`;
export const P = styled.p`
    width: 100%;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    -webkit-mask-image: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 1.0) 10%);
`;
export const Span = styled.span`

    transition: all 0.5s ease-in-out;

    ${Li}:hover & {
        margin-left: ${props => props.marginLeft};
        transition: all ${props => props.animationDuration}s linear;
    }
`;

export const ScLink = styled(Link)`
    width: 14.33%;
    text-decoration: none;
    color: #fff;
`;
