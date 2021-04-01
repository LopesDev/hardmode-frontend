import styled, { css } from 'styled-components';

const InputTextWrapper = styled.div`
    transition: border 200ms ease-in-out;
    cursor: text;

    display: flex;
    justify-content: flex-start;

    border: 1px solid ${({theme}) => theme.pallet.lightGrey};
    border-radius: ${({theme}) => theme.spacing(.5)};

    padding: ${({theme}) => `${theme.spacing(1)} ${theme.spacing(2)}`};

    &:focus-within {
        border: 1px solid ${({theme}) => theme.pallet.primary};
    }
`;

const InputText = styled.input`
    border: none;
    outline: none;

    color: ${({theme}) => theme.pallet.title};
    width: 100%;
`;

const IconImage = styled.div`
    width: 24px;
    max-width: 24px;

    height: 24px;
    max-height: 24px;

    margin-right: ${({theme}) => theme.spacing(1)};

    cursor: pointer;

    svg > path {
        fill: ${({theme}) => theme.pallet.title};
    }
`;

const FileWrapper = styled.div<{ dragging: boolean, hasImage: boolean, fileImage: string | ArrayBuffer }>`
    transition: all 200ms ease-in-out;
    width: ${({theme}) => theme.spacing(20)};
    height: ${({theme}) => theme.spacing(20)};
    border-radius: 100%;
    position: relative;
    cursor: pointer;
    background: ${({theme}) => theme.pallet.grey};
    background-size: cover;
    background-position: center center;
    border: 2px dashed ${({theme}) => theme.pallet.lightGrey};
    box-shadow: 0 5px 8px rgba(black, 0.35);

    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;

    input[type="file"] {
        display: none;
    }

    ${({dragging}) => dragging && css`
        border: 2px dashed ${({theme}) => theme.pallet.primary};
        background: ${({theme}) => theme.pallet.background};
    `}

    ${({hasImage}) => hasImage && css`
        opacity: 0;
        pointer-events: none;
        user-select: none;
        label {
            opacity: 0;
            pointer-events: none;
            user-select: none;
        }
    `}

    ${({fileImage}) => css`
        background-image: url(${fileImage as string});
        border: 1px solid ${({theme}) => theme.pallet.grey};
    `}
`;

const InputRange = styled.input`
    appearance: none;
    outline: none;
    background-color: transparent;

    &[type="range" i]::-webkit-slider-runnable-track {
        cursor: default;

        background-color: ${({theme}) => theme.pallet.white};
        height: ${({theme}) => theme.spacing(.8)};
        border-radius: ${({theme}) => theme.spacing(.8)};
        border: none
    }

    &[type="range" i]::-webkit-slider-thumb {
        appearance: none;
        cursor: grab;

        margin-top: ${({theme}) => theme.spacing(-0.8)};

        height: ${({theme}) => theme.spacing(2.5)};
        width: ${({theme}) => theme.spacing(2.5)};

        border: 2px solid ${({theme}) => theme.pallet.white};
        border-radius: ${({theme}) => theme.spacing(2)};
        background-color: ${({theme}) => theme.pallet.primary};

        &:active {
            cursor: grabbing;
        }
    }
`;

export {
    InputTextWrapper, InputText, IconImage, FileWrapper, InputRange
}