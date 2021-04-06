import { useState, useRef, DragEvent, useCallback } from 'react';
import { FileWrapper } from './styled';

import { InputProps } from './input.types';

function FileInput({ type, id, previewImage, children, onChange, ...props}: InputProps & { previewImage?: string | ArrayBuffer }): JSX.Element {

    const [ dragging, setDragging ] = useState(false);
    const [ hasImage, setHasImage ] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleWrapperClick = useCallback(() => {
        inputRef.current.click();
    }, []);

    const handleWrapperDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    }, [setDragging]);

    const handleWrapperDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
    }, [setDragging])

    const handleWrapperDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setHasImage(true);

        if (e.dataTransfer) {
            const file = e.dataTransfer.files[0];
            onChange(undefined, file);
        }
    }, [setHasImage, onChange]);

    return (
        <FileWrapper
            id={ `file-${id}` }
            dragging={dragging}
            hasImage={hasImage}
            fileImage={previewImage}
            onClick={handleWrapperClick}
            onDragOver={handleWrapperDragOver}
            onDragLeave={handleWrapperDragLeave}
            onDrop={handleWrapperDrop}
        >
            {!previewImage && children}
            <input
                ref={inputRef}
                id={id}
                type={type}
                onChange={(e) => onChange(e, e.target.files[0])} {...props}
                onClick={(event) => {
                    event.stopPropagation();

                    if (props.onClick) {
                        props.onClick(event);
                    }
                }}
            />
        </FileWrapper>
    );
}

export default FileInput;
