import { useRef, InputHTMLAttributes } from 'react';
import { InputRange } from './styled';

import { InputProps } from './input.types';

function RangeInput(props: InputProps): JSX.Element {

    return (
        <InputRange
            { ...props as InputHTMLAttributes<HTMLInputElement> }
        />
    );
}

export default RangeInput;
