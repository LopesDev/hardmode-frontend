import { ButtonHTMLAttributes } from 'react';
import { ButtonProps } from './button.types';
import { MyButton } from './styled';

function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) {
    return (
        <MyButton {...props}>
            {children}
        </MyButton>
    );
}

export default Button;
