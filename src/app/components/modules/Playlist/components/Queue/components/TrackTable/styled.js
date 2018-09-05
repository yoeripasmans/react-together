import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    max-width: 77rem;
`;

export const Tr = styled.tr`
    display: grid;
    grid-template-columns: 4.5em 1fr 1fr 15em 3em;
    grid-gap: 1em;
    list-style-type: none;
    margin-bottom: 1em;
`;

export const Td = styled.td`
    display: flex;
    align-items: center;
    line-height: 1.2;
`;

export const Th = styled.th`
    display: flex;
    align-items: center;
    line-height: 1.2;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 400;
    opacity: 0.8;
`;

export const TrackImg = styled.img`
    height: auto;
    width: 72%;
    border-radius: 4px;
`;

export const UserImg = styled.img`
    width: 2.2em;
    margin-right: 0.8em;
    border-radius: 50%;
`;

export const UserName = styled.p`
    display: flex;
    align-items: center;
    line-height: 1.2;
`;
