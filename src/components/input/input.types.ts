import { HTMLProps, ReactNode } from 'react';

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>, file?: File) => void,
}