import styled from 'styled-components';

export const Ul = styled.ul`
    padding: 0;
    display: grid;
    column-gap: 25px;
    row-gap: 25px;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fill, minmax(6em, 1fr));
    height: 8rem;
    overflow: hidden;
`;

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Img = styled.img`
    width: 6rem;
    border-radius: 50%;
`;

export const P = styled.p`
    text-align: center;
    margin: 0.5rem 0 0 0;
`;
