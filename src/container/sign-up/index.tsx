
import React, { InputHTMLAttributes, useState } from 'react';
import { useTheme } from 'styled-components';

import {
    SignUpWrapper, FormHeader, FormSectionTitle, Content, Center
} from './styled';

import { Row, Col } from '../../components/grid';
import InputGroup from '../../components/group-input';

import {
    ContactCard, FacebookIcon, Github, ImagePlaceholder, InstagramCircle, Mail, LockMultiple, Person,
    Phone, Steam
} from '../../icons';

function SignUpContainer() {

    const theme = useTheme();

    const [userProfileFile, setUserProfileFile] = useState<File>();
    const [userProfileUrl, setUserProfileUrl] = useState<string | ArrayBuffer>();

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
                        <Col xs={12} md={12} lg={12}>
                            <hr />
                        </Col>
                        <Col xs={12} md={12} lg={12}>
                            <Center>
                                <InputGroup
                                    inputType="file"
                                    id="profilePicture"
                                    label="Foto de perfil"
                                    previewImage={userProfileUrl}
                                    iconPrefix={<ImagePlaceholder color={theme.pallet.text} height={32} width={32} />}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>, file: File) => {
                                            console.log(file);
                                            setUserProfileFile(file);

                                            const reader = new FileReader();
                                            reader.onload = function(event) {
                                                setUserProfileUrl(reader.result);
                                            }

                                            reader.readAsDataURL(file);
                                            return;
                                        }
                                    }
                                />
                            </Center>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                inputType="text"
                                id="fullName"
                                label="Nome completo"
                                iconPrefix={<ContactCard />}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                inputType="text"
                                id="email"
                                label="E-mail"
                                iconPrefix={<Mail />}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                inputType="text"
                                id="nickName"
                                label="Nickname em jogos"
                                iconPrefix={<Person />}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                inputType="text"
                                id="phone"
                                label="Número de celular"
                                iconPrefix={<Phone />}
                            />
                        </Col>


                        <Col xs={12} md={6} lg={3}>
                            <InputGroup
                                inputType="password"
                                id="password"
                                label="Senha"
                                iconPrefix={<LockMultiple />}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={3}>
                            <InputGroup
                                inputType="password"
                                id="confirmPassword"
                                label="Confirmar senha"
                                iconPrefix={<LockMultiple />}
                            />
                        </Col>
                    </Row>

                    <FormSectionTitle>Redes sociais</FormSectionTitle>

                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                inputType="text"
                                id="steamUrl"
                                label="Perfil da steam"
                                iconPrefix={<Steam color={theme.pallet.title} />}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                inputType="text"
                                id="instagramUrl"
                                label="Instagram"
                                iconPrefix={<InstagramCircle />}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                inputType="text"
                                id="facebookUrl"
                                label="Facebook"
                                iconPrefix={<FacebookIcon />}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                inputType="text"
                                id="githubUrl"
                                label="Perfil no GitHub"
                                iconPrefix={<Github />}
                            />
                        </Col>
                    </Row>

                </form>
            </SignUpWrapper>
        </Content>
    )
}

export default SignUpContainer;
