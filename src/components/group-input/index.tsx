import { ReactNode } from 'react';
import { TextInput, FileInput } from '../input';
import { InputGroupProps } from './group-input.types';

import { GroupInputWrapper } from './styled';

interface CustomProps {
    iconPrefix?: ReactNode,
    sufix?: ReactNode,
    onClickSufix?: (e) => void,
    previewImage?: string | ArrayBuffer,
}

function InputGroup({ inputType = 'text', label, id, iconPrefix, sufix, onClickSufix, ...props }: InputGroupProps & CustomProps) {

    switch (inputType) {
        case 'file':
            return (
                <GroupInputWrapper>
                    <FileInput type={inputType} id={id} {...props}>
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
                        type={inputType}
                        iconPrefix={iconPrefix}
                        sufix={sufix}
                        onClickSufix={onClickSufix}
                        {...props}
                    />
                </GroupInputWrapper>
            );
    
        default:
            return (
                <GroupInputWrapper>
                    <label htmlFor={id}>{label}</label>
                    <TextInput
                        id={id}
                        type={inputType}
                        iconPrefix={iconPrefix}
                        sufix={sufix}
                        onClickSufix={onClickSufix}
                        {...props}
                    />
                </GroupInputWrapper>
            );
    }
}

export { InputGroup as default };
