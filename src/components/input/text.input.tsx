import { ReactNode, useRef } from 'react';
import { InputTextWrapper, InputText, IconImage } from './styled';

import { InputProps } from './input.types';

interface CustomProps {
    iconPrefix?: ReactNode,
    sufix?: ReactNode
}

function TextInput({ type, id, iconPrefix, sufix }: InputProps & CustomProps): JSX.Element {

    const inputRef = useRef<HTMLInputElement>(null);

    function focusInput(event) {
        event.preventDefault();

        return inputRef.current.focus();
    }

    return (
        <InputTextWrapper onClick={focusInput}>
            {iconPrefix && (
                <IconImage>{iconPrefix}</IconImage>
            )}

            <InputText
                ref={inputRef}
                id={ id }
                type={ type }
            />

            {sufix && (
                <IconImage>{sufix}</IconImage>
            )}
        </InputTextWrapper>
    );
}

export default TextInput;
