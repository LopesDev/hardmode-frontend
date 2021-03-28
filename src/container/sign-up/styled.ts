import styled from 'styled-components';

const SignUpWrapper = styled.section`
    max-width: 1200px;

    margin: ${({theme}) => theme.spacing(8)} auto;
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

const FormSectionTitle = styled.h3`
    margin: ${({theme}) => theme.spacing(4)} 0px;
`;

export {
    SignUpWrapper, FormHeader, FormSectionTitle
};
