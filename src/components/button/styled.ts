import styled from 'styled-components';
import { ButtonProps } from './button.types';

const MyButton = styled.button<ButtonProps>`
    padding: ${({theme}) => `${theme.spacing(1)} ${theme.spacing(2)}`};
    border: none;
    font-size: 1rem;
`;

export { MyButton };
