type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'default' | 'large';

export interface ButtonProps {
    size?: ButtonSize,
    btnType?: ButtonType
}