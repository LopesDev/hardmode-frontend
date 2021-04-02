import { ReactNode } from 'react';
import { InputTextWrapper, InputText, IconImage } from './styled';

import { InputProps } from './input.types';

interface CustomProps {
    iconPrefix?: ReactNode,
    sufix?: ReactNode,
    onClickSufix?: (e) => void,
    validated?: boolean
}

function TextInput({ type, id, iconPrefix, sufix, onClickSufix, ref, as, validated = false, ...props }: InputProps & CustomProps): JSX.Element {

    function focusInput(event) {
        event.preventDefault();

        return document.getElementById(id).focus();
    }

    return (
        <InputTextWrapper
            onClick={focusInput}
            validated={validated}
        >
            {iconPrefix && (
                <IconImage>{iconPrefix}</IconImage>
            )}

            <InputText
                id={ id }
                type={ type }
                {...props }
            />

            {sufix && (
                <IconImage onClick={onClickSufix}>{sufix}</IconImage>
            )}
        </InputTextWrapper>
    );
}

export default TextInput;
