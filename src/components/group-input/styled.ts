import styled from 'styled-components';

const GroupInputWrapper = styled.div`
    label {
        display: block;
        font-size: 1.1rem;
        margin-bottom: ${({theme}) => theme.spacing(1)};

        width: fit-content;
    }
`;

const ErrorMsg = styled.small`
    color: ${({theme}) => theme.pallet.danger};
    font-size: 0.91rem;
`;

export {
    GroupInputWrapper, ErrorMsg
}