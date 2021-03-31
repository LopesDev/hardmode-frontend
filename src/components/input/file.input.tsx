import { useRef } from 'react';
import { InputTextWrapper, InputText, IconImage } from './styled';

import { InputProps } from './input.types';

function FileInput({ type, id }: InputProps): JSX.Element {

    const inputRef = useRef<HTMLInputElement>(null);

    function focusInput(event) {
        event.preventDefault();

        return inputRef.current.focus();
    }

    return (
        <InputTextWrapper onClick={focusInput}>
            <InputText
                ref={inputRef}
                id={ id }
                type={ type }
            />
        </InputTextWrapper>
    );
}

export default FileInput;
