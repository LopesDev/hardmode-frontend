import styled, { css } from 'styled-components';
import { ButtonProps } from './button.types';

const MyButton = styled.button<ButtonProps>`
    padding: ${({theme}) => `${theme.spacing(1)} ${theme.spacing(2)}`};
    border: none;
    font-size: 1rem;
    font-weight: ${({theme}) => theme.typografy.text.medium};

    ${({btnType}) => {
        switch (btnType) {
            case 'primary':
                return css`
                    background-color: ${({theme}) => theme.pallet.primary};
                    color: ${({theme}) => theme.pallet.white};
                `;

            case 'secondary':
                return css`
                    background-color: ${({theme}) => theme.pallet.secondary};
                    color: ${({theme}) => theme.pallet.white};
                `;

            case 'info':
                return css`
                    background-color: ${({theme}) => theme.pallet.link};
                    color: ${({theme}) => theme.pallet.white};
                `;
        
            default:
                return css`
                    background-color: ${({theme}) => theme.pallet.grey};
                    color: ${({theme}) => theme.pallet.title};
                `;
        }
    }}
`;

export { MyButton };
