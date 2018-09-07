import styled, { keyframes } from 'styled-components';

const barAnimation = keyframes`
        0% {

        }
        100% {
            height: 10px;
        }
    `;
export const Div = styled.div`
    display: flex;
    align-items: flex-end;
    height: 60px;
`;
export const Bar = styled.div`
    width: 3px;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 0.25rem;
`;
export const Bar1 = styled(Bar)`
    animation: ${barAnimation} 0.28s ease-in-out infinite alternate;
    height: 60px;
`;
export const Bar2 = styled(Bar)`
    animation: ${barAnimation} 0.29s ease-in-out infinite alternate;
    height: 45px;
`;
export const Bar3 = styled(Bar)`
    animation: ${barAnimation} 0.26s ease-in-out infinite alternate;
    height: 40px;
`;
export const Bar4 = styled(Bar)`
    animation: ${barAnimation} 0.3s ease-in-out infinite alternate;
    height: 25px;
`;
export const Bar5 = styled(Bar)`
    animation: ${barAnimation} 0.2s ease-in-out infinite alternate;
    height: 15px;
`;
export const Bar6 = styled(Bar)`
    animation: ${barAnimation} 0.2s ease-in-out infinite alternate;
    height: 20px;
`;
