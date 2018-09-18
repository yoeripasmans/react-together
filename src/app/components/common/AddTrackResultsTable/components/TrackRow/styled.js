import styled from 'styled-components';
import PlusIcon from 'vectors/icon_plus.svg';
import CrossIcon from 'vectors/icon_cross.svg';
import { Tr } from '../../styled';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    background: none;
    color: inherit;
    padding: 0;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;
export const Img = styled.img`
    border-radius: 4px;
    width: 100%;
    width: 3rem;
    height: 3rem;
`;
export const ScPlusIcon = styled(PlusIcon)`
    display: block;
    width: 1.2rem;
`;
export const ScCrossIcon = styled(CrossIcon)`
    display: block;
    width: 1.2rem;
`;
export const ExtendedTr = styled(Tr)`
    @media (max-width: 750px) {
        grid-template-columns: 3em 1fr 2em;
        grid-row-gap: 0;
        height: 3em;
        grid-column-gap: 2rem;
    }
`;
export const Td = styled.td`
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    -webkit-mask-image: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 1.0) 10%);
    line-height: 1.2;
`;
export const ImgTd = styled(Td)`
    @media (max-width: 750px) {
        grid-row: 1 / 3;
    }
`;
export const NameTd = styled(Td)`
    @media (max-width: 750px) {
        grid-row: 1;
        font-weight: 600;
        font-size: 1rem;
    }
`;
export const ArtistTd = styled(Td)`
    @media (max-width: 750px) {
        grid-row: 2;
        font-size: .875rem;
        color: rgba(255, 255, 255, 0.6);
    }
`;
export const ButtonTd = styled(Td)`
    @media (max-width: 750px) {
        grid-row: 1/3;
    }
`;
