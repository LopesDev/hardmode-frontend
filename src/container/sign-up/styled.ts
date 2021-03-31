import styled from 'styled-components';

const Content = styled.div`
    padding: 0px ${({theme}) => theme.spacing(8)};
    margin: ${({theme}) => theme.spacing(8)} auto;

    max-width: 1200px;
`;

const SignUpWrapper = styled.section`
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

const Row = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    flex-wrap: wrap;

    margin: 0px -${({theme}) => theme.spacing(3)};
`;

const Col = styled.div`
    flex: 50%;

    padding: ${({theme}) => `${theme.spacing(1)} ${theme.spacing(3)}`};
`;

export {
    SignUpWrapper, FormHeader, FormSectionTitle, Content, Row, Col
};