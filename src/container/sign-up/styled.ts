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

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const CropperWrapper = styled.div`
    position: relative;
    flex: 3;
`;

const ModalFooter = styled.div`
    position: relative;
    flex: 1;
`;

export {
    SignUpWrapper, FormHeader, FormSectionTitle, Content, Center, ModalContent,
    CropperWrapper, ModalFooter
};
