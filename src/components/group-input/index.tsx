import { ReactNode } from 'react';
import { TextInput, FileInput, RangeInput } from '../input';
import { InputGroupProps } from './group-input.types';

import { GroupInputWrapper } from './styled';

interface CustomProps {
    iconPrefix?: ReactNode,
    sufix?: ReactNode,
    onClickSufix?: (e) => void,
    previewImage?: string | ArrayBuffer,
}

function InputGroup({ type = 'text', label, id, iconPrefix, sufix, onClickSufix, ...props }: InputGroupProps & CustomProps) {

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
                        {...props}
                    />
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
                        {...props}
                    />
                </GroupInputWrapper>
            );
    }
}

export { InputGroup as default };
