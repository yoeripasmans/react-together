import styled from 'styled-components';
import Loader from 'common/Loader';

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    background-color: rgb(0,0,0);
`;
export const ScLoader = styled(Loader)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
