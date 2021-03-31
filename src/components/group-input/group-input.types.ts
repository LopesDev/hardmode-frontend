import { HTMLProps } from 'react';

type _InputType = 'text' | 'file' | 'password';

export interface InputGroupProps extends HTMLProps<HTMLInputElement> {
    inputType?: _InputType,
    label: string,
}