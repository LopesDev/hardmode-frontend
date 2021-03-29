import styled from 'styled-components';

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

    svg > path {
        fill: ${({theme}) => theme.pallet.title};
    }
`;

export {
    InputTextWrapper, InputText, IconImage
}