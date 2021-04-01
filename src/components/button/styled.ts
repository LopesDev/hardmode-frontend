import styled, { css } from 'styled-components';
import { ButtonProps } from './button.types';

const MyButton = styled.button<ButtonProps>`
    padding: ${({theme}) => `${theme.spacing(1)} ${theme.spacing(2)}`};
    border: none;
    font-size: 1rem;
    font-weight: ${({theme}) => theme.typografy.text.medium};

    ${({btnType}) => btnType && css`
        background-color: ${({theme}) => theme.pallet.primary};
        color: ${({theme}) => theme.pallet.white};
    `}
`;

export { MyButton };
