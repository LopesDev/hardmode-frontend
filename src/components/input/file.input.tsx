import { useEffect, useState } from 'react';
import { FileWrapper } from './styled';

import { InputProps } from './input.types';

function FileInput({ type, id, previewImage, children, onChange, ...props}: InputProps & { previewImage?: string | ArrayBuffer }): JSX.Element {

    const [ dragging, setDragging ] = useState(false);
    const [ hasImage, setHasImage ] = useState(false);

    useEffect(() => {
        const fileWrapper = document.getElementById(`file-${id}`);
        const fileInput = document.getElementById(id);

        function handleWrapperClick(e) {
            fileInput.click();
        }

        function handleWrapperDragOver(e) {
            e.preventDefault();
            setDragging(true);
        }

        function handleWrapperDragLeave(e) {
            e.preventDefault();
            setDragging(false);
        }

        function handleWrapperDrop(e) {
            e.preventDefault();
            setHasImage(true);

            if (e.originalEvent) {
                const file = e.originalEvent.dataTransfer.files[0];
                onChange(undefined, file);
            }
        }

        fileWrapper.addEventListener('click', handleWrapperClick);
        fileWrapper.addEventListener('dragover', handleWrapperDragOver);
        fileWrapper.addEventListener('dragleave', handleWrapperDragLeave);
        fileWrapper.addEventListener('drop', handleWrapperDrop);

        return () => {
            fileWrapper.removeEventListener('click', handleWrapperClick);
            fileWrapper.removeEventListener('dragover', handleWrapperDragOver);
            fileWrapper.removeEventListener('dragleave', handleWrapperDragLeave);
            fileWrapper.removeEventListener('drop', handleWrapperDrop);
        };

    }, [id, setDragging, setHasImage]);

    return (
        <FileWrapper
            id={ `file-${id}` }
            dragging={dragging}
            hasImage={hasImage}
            fileImage={previewImage}
        >
            {!previewImage && children}
            <input id={id} type={type} onChange={(e) => onChange(e, e.target.files[0])} {...props} />
        </FileWrapper>
    );
}

export default FileInput;
