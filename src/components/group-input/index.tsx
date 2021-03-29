import {ReactNode} from 'react';
import { TextInput } from '../input';
import { InputGroupProps } from './group-input.types';

import { GroupInputWrapper } from './styled';

interface CustomProps {
    iconPrefix?: ReactNode,
    sufix?: ReactNode
}

function InputGroup({ inputType = 'text', label, id, iconPrefix, sufix }: InputGroupProps & CustomProps) {

    switch (inputType) {
        case 'file':
            return (
                <div>
                    <input placeholder="Suzana linda" type="file" />
                </div>
            )
    
        default:
            return (
                <GroupInputWrapper>
                    <label htmlFor={id}>{label}</label>
                    <TextInput
                        id={id}
                        type={inputType}
                        sufix={sufix}
                        iconPrefix={iconPrefix}
                    />
                </GroupInputWrapper>
            );
    }
}

export { InputGroup as default };
