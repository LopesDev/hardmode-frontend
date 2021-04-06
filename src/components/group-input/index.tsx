import { ReactNode } from 'react';
import { TextInput, FileInput, RangeInput } from '../input';
import { InputGroupProps } from './group-input.types';

import { GroupInputWrapper, ErrorMsg } from './styled';

interface CustomProps {
    iconPrefix?: ReactNode,
    sufix?: ReactNode,
    onClickSufix?: (e) => void,
    previewImage?: string | ArrayBuffer,
    validated?: boolean,
    errorMsg?: string,
    prestine?: boolean,
}

function InputGroup({
    type = 'text', label, id, iconPrefix, sufix, onClickSufix, validated, errorMsg, prestine = true, ...props
}: InputGroupProps & CustomProps) {

    switch (type) {
        case 'file':
            return (
                <GroupInputWrapper>
                    <FileInput type={type} id={id} {...props}>
                        {iconPrefix}
                        <label htmlFor={id}>{label}</label>
                    </FileInput>
                </GroupInputWrapper>
            )

        case 'password':
            return (
                <GroupInputWrapper>
                    <label htmlFor={id}>{label}</label>
                    <TextInput
                        id={id}
                        type={type}
                        iconPrefix={iconPrefix}
                        sufix={sufix}
                        onClickSufix={onClickSufix}
                        validated={prestine || (!prestine && validated)}
                        {...props}
                    />
                    {!prestine && !validated && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </GroupInputWrapper>
            );

        case 'range':
            return (
                <GroupInputWrapper>
                    <label htmlFor={id}>{label}</label>
                    <RangeInput
                        {...props}
                        type="range"
                        id={id}
                    />
                </GroupInputWrapper>
            );
    
        default:
            return (
                <GroupInputWrapper>
                    <label htmlFor={id}>{label}</label>
                    <TextInput
                        id={id}
                        type={type}
                        iconPrefix={iconPrefix}
                        sufix={sufix}
                        onClickSufix={onClickSufix}
                        validated={prestine || (!prestine && validated)}
                        {...props}
                    />
                    {!prestine && !validated && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </GroupInputWrapper>
            );
    }
}

export { InputGroup as default };
