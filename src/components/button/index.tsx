import { ButtonHTMLAttributes } from 'react';
import { MyButton } from './styled';

function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <MyButton {...props}>
            {children}
        </MyButton>
    );
}

export default Button;
