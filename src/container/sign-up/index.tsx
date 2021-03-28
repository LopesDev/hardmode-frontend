import {
    SignUpWrapper, FormHeader, FormSectionTitle
} from './styled';

function SignUpContainer() {
    return (
        <SignUpWrapper>
            <form>
                <FormHeader>
                    <h1>Criar conta</h1>
                    <p>Preencha os campos obrigatórios e crie agora mesmo sua conta</p>
                </FormHeader>

                <FormSectionTitle>Dados pessoais</FormSectionTitle>
            </form>
        </SignUpWrapper>
    )
}

export default SignUpContainer;
