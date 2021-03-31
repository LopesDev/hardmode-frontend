import React, { HTMLProps } from 'react';

type _InputType = 'text' | 'file' | 'password';

export interface InputGroupProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
    inputType?: _InputType,
    label: string,
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>, file?: File) => void,
}