import styled from 'styled-components';

export const Img = styled.div`
    background: #667780 -webkit-linear-gradient(rgba(0, 0, 0, 0.30) 0%, #000000 77%);
    background: #667780 -o-linear-gradient(rgba(0, 0, 0, 0.30) 0%, #000000 77%);
    background: #667780 linear-gradient(rgba(0, 0, 0, 0.30) 0%, #000000 77%);
    background-size: 100%;
    display: block;
    filter: blur(2.5em);
    -webkit-filter: blur(2.5em);
    transform: scale(1.2);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    transition: background-image 0.6s ease-in-out;
    background-image: url(${props => props.imgsrc});

    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        background: linear-gradient(to bottom, transparent 0%, #000000 77%);
        z-index: 1;
    }
`;

export const BackgroundImageContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    top: 0;
    left: 0;
    overflow: hidden;
`;
