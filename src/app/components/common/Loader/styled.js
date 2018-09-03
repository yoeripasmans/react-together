import styled, { keyframes } from 'styled-components';

const barAnimation = keyframes`
        0% {
            height: 50px;
        }
        100% {
            height: 10px;
        }
    `;
export const Div = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100px;
`;
export const Bar = styled.div`
    width: 3px;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 0.25rem;
`;
export const Bar1 = styled(Bar)`
    animation: ${barAnimation} 0.5s ease-out infinite alternate;
    height: 50px;
`;
export const Bar2 = styled(Bar)`
    animation: ${barAnimation} 1s ease-out infinite alternate;
    height: 50px;
`;
export const Bar3 = styled(Bar)`
    animation: ${barAnimation} 1.7s ease-out infinite alternate;
    height: 50px;
`;
export const Bar4 = styled(Bar)`
    animation: ${barAnimation} 1.5s ease-out infinite alternate;
    height: 50px;
`;
export const Bar5 = styled(Bar)`
    animation: ${barAnimation} 0.7s ease-out infinite alternate;
    height: 50px;
`;
export const Bar6 = styled(Bar)`
    animation: ${barAnimation} 1.3s ease-out infinite alternate;
    height: 50px;
`;
