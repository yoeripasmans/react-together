import styled from 'styled-components';
import PlusIcon from 'vectors/icon_plus.svg';
import CrossIcon from 'vectors/icon_cross.svg';

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
export const ScPlusIcon = styled(PlusIcon)`
    display: block;
    width: 1.2rem;
`;
export const ScCrossIcon = styled(CrossIcon)`
    display: block;
    width: 1.2rem;
`;
