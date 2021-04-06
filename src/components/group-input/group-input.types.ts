import React, { HTMLProps } from 'react';

export interface InputGroupProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
    label: string,
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>, file?: File) => void,
}