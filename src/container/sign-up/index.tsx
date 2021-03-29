import {
    SignUpWrapper, FormHeader, FormSectionTitle, Content, Row, Col
} from './styled';

import InputGroup from '../../components/group-input';

import { ContactCard } from '../../icons';

function SignUpContainer() {
    return (
        <Content>

            <SignUpWrapper>
                <form>
                    <FormHeader>
                        <h1>Criar conta</h1>
                        <p>Preencha os campos obrigatórios e crie agora mesmo sua conta</p>
                    </FormHeader>

                    <FormSectionTitle>Dados pessoais</FormSectionTitle>

                    <Row>
                        <Col>
                            <InputGroup
                                inputType="text"
                                id="fullName"
                                label="Nome completo"
                                iconPrefix={<ContactCard />}
                            />
                        </Col>

                        <Col>
                            <InputGroup
                                inputType="text"
                                id="email"
                                label="E-mail"
                            />
                        </Col>

                        <Col>
                            <InputGroup
                                inputType="text"
                                id="nickName"
                                label="Nickname em jogos"
                            />
                        </Col>

                        <Col>
                            <InputGroup
                                inputType="text"
                                id="phone"
                                label="Número de celular"
                            />
                        </Col>

                        <Col>
                            <InputGroup
                                inputType="text"
                                id="password"
                                label="Senha"
                            />
                        </Col>

                        <Col>
                            <InputGroup
                                inputType="text"
                                id="confirmPassword"
                                label="Confirmar senha"
                            />
                        </Col>
                    </Row>

                    <FormSectionTitle>Redes sociais</FormSectionTitle>

                    <Row>
                        <Col>
                            <InputGroup
                                inputType="text"
                                id="steamUrl"
                                label="Perfil da steam"
                            />
                        </Col>
                        <Col>
                            <InputGroup
                                inputType="text"
                                id="instagramUrl"
                                label="Instagram"
                            />
                        </Col>
                        <Col>
                            <InputGroup
                                inputType="text"
                                id="facebookUrl"
                                label="Facebook"
                            />
                        </Col>
                        <Col>
                            <InputGroup
                                inputType="text"
                                id="githubUrl"
                                label="Perfil no GitHub"
                            />
                        </Col>
                    </Row>

                </form>
            </SignUpWrapper>
        </Content>
    )
}

export default SignUpContainer;
