import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    height: 10em;
    margin: 2em 0;
`;

export const PlaylistName = styled.h1`
    margin: 0 0 0.2em 0;
    font-size: 3.5em;
`;

export const PlaylistImg = styled.img`
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 32px 40px -20px rgba(0, 0, 0, 0.80);
    margin-right: 3em;
`;

export const UserCreated = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.4rem;
`;

export const UserCreatedImg = styled.img`
    width: 2em;
    border-radius: 50%;
    margin-left: 0.6em;
    margin-right: 1rem;
`;

export const UserCreatedName = styled.p`
    margin: 0;
`;
