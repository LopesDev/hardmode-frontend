import styled from 'styled-components';

const SignInWrapper = styled.section`
    background: ${({theme}) => theme.pallet.white};
    border: 1px solid ${({theme}) => theme.pallet.lightGrey};

    form {
        width: 100%;

        display: flex;
        flex-direction: column;

        padding: ${({theme}) => theme.spacing(8)};
    }
`;

const FormHeader = styled.header`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2rem;
    }
    p {
        font-size: 1rem;
    }
`;

export { SignInWrapper, FormHeader }