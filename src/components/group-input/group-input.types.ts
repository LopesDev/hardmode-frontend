import { HTMLProps } from 'react';

type _InputType = 'text' | 'file';

export interface InputGroupProps extends HTMLProps<HTMLInputElement> {
    inputType?: _InputType,
    label: string,
}