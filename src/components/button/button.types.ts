type ButtonType = 'primary' | 'secondary' | 'info';
type ButtonSize = 'small' | 'default' | 'large';

export interface ButtonProps {
    size?: ButtonSize,
    btnType?: ButtonType
}