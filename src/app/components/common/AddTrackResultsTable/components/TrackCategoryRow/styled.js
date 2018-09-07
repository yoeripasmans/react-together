import styled from 'styled-components';

import { Tr } from '../../styled';

export const Th = styled.th`
    display: flex;
    align-items: center;
    line-height: 1.2;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 400;
    opacity: 0.8;
`;
export const ExtendedTr = styled(Tr)`
    @media (max-width: 750px) {
        display: none;
    }
`;
