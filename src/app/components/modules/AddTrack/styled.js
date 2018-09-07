import styled from 'styled-components';
import Loader from 'common/Loader';

export const Section = styled.section`
    max-width: 70rem;
    height: 100vh;
    padding: 2rem 0;
    margin: auto;
`;
export const ScLoader = styled(Loader)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
