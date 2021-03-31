import { useEffect, useState } from 'react';
import { FileWrapper } from './styled';

import { InputProps } from './input.types';

function FileInput({ type, id, children }: InputProps): JSX.Element {

    const [ dragging, setDragging ] = useState(false);
    const [ hasImage, setHasImage ] = useState(false);
    const [ image, setImage ] = useState<string | ArrayBuffer>();

    useEffect(() => {
        const fileWrapper = document.getElementById(`file-${id}`);
        const fileInput = document.getElementById(id);

        function handleWrapperClick() {
            fileInput.click();
        }

        function handleWrapperDragOver() {
            setDragging(true);
        }

        function handleWrapperDragLeave() {
            setDragging(false);
        }

        function handleWrapperDrop(e) {
            setHasImage(true);

            if (e.originalEvent) {
                const file = e.originalEvent.dataTransfer.files[0];
                console.log(file);
            
                const reader = new FileReader();
            
                //attach event handlers here...
            
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    console.log(reader.result);
                    setImage(reader.result);
                }
        
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

    }, [id, setDragging, setHasImage, setImage]);

    return (
        <FileWrapper
            id={ `file-${id}` }
            dragging={dragging}
            hasImage={hasImage}
            fileImage={image}
        >
            {children}
            <input id={id} type={type} />
        </FileWrapper>
    );
}

export default FileInput;
