
import React, { FormEvent, useState, useContext } from 'react';
import Link from 'next/link';

import { Container, Row, Col, Space } from '../../components/grid';
import Button from '../../components/button';
import Anchor from '../../components/anchor';
import { SignInWrapper, FormHeader } from './styled';
import InputGroup from '../../components/group-input';

import { AuthContext } from '../../context/AuthContext';

import { LockMultiple, Person } from '../../icons';

const fieldInitialState = { value: '', validated: false, prestine: true, errorMsg: '' }

function SignInContainer(): JSX.Element {
    const { signIn } = useContext(AuthContext);

    // Form input fields.
    const [nickName, setNickName] = useState(fieldInitialState);
    const [password, setPassword] = useState(fieldInitialState);

    const validateFields = (): boolean => {
        const fieldsValidated = [
            nickName.validated,
            password.validated,
        ];

        return fieldsValidated.every(field => field);
    }

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const requiredFields = [
            'nickName',
            'password',
        ];

        await (async () => {
            const promises:Promise<string>[] = [];
    
            for (const id of requiredFields) {
                const element = document.getElementById(id);
                element.focus();
                element.blur();
                promises.push(Promise.resolve('ok'));
            }

            return Promise.all(promises);
        })();

        if (validateFields()) {
            try {
                signIn({
                    nickName: nickName.value,
                    password: password.value,
                });
            } catch (e) {
                console.error('Não foi possível Fazer o login!');
                console.error(e);
            }
        } else {
            console.log('Formulário inválido!');
        }
    }

    return (
        <Container>

            <SignInWrapper>
                <form onSubmit={handleFormSubmit}>

                    <Row>

                        <Col xs={12} md={6} lg={6}>

                            <Row justifyContent="center" alignItems="center">

                                <Space horizontal vertical space={3}>
                                    <img src="/img/login-ilustration.svg" alt="Login HardMode" />
                                </Space>

                            </Row>

                        </Col>

                        <Col xs={12} md={6} lg={6}>

                            <FormHeader>
                                <h1>Faça seu login</h1>
                                <p>Preencha os campos e clique no botão para fazer seu acesso ao portal</p>
                            </FormHeader>

                            <Row>

                                <Col xs={12} md={12} lg={12}>

                                    <InputGroup
                                        type="text"
                                        id="nickName"
                                        label="Usuário"
                                        iconPrefix={<Person />}
                                        onFocus={(event) => {
                                            setNickName({
                                                ...nickName,
                                                prestine: false,
                                            });
                                        }}
                                        onChange={(event) => {
                                            setNickName({
                                                ...nickName,
                                                value: event.target.value,
                                            });
                                        }}
                                        onBlur={(event) => {
                                            setNickName({
                                                ...nickName,
                                                validated: Boolean(nickName.value),
                                                errorMsg: Boolean(nickName.value) ? '' : 'Você precisa informar o seu nick name'
                                            });
                                        }}
                                        {...nickName}
                                    />

                                </Col>

                                <Col xs={12} md={12} lg={12}>
                                
                                    <InputGroup
                                        type="password"
                                        id="password"
                                        label="Senha"
                                        iconPrefix={<LockMultiple />}
                                        onFocus={(event) => {
                                            setPassword({
                                                ...password,
                                                prestine: false,
                                            });
                                        }}
                                        onChange={(event) => {
                                            setPassword({
                                                ...password,
                                                value: event.target.value
                                            });
                                        }}
                                        onBlur={(event) => {
                                            setPassword({
                                                ...password,
                                                validated: Boolean(password.value),
                                                errorMsg: Boolean(password.value) ? '' : 'Você deve informar uma senha'
                                            });
                                        }}
                                        {...password}
                                    />
                                    
                                </Col>

                                <Col xs={12} md={12} lg={12}>

                                    <Row justifyContent="flex-end">

                                        <Space horizontal space={3}>
                                            <Button btnType="info" type="submit">
                                                Entrar
                                            </Button>
                                        </Space>

                                    </Row>

                                </Col>

                                <Col xs={12} md={12} lg={12}>

                                    <span>
                                        Não possui conta?&nbsp;
                                        <Link href="/sign-up">
                                            <Anchor>
                                                Criar conta
                                            </Anchor>
                                        </Link>
                                    </span>

                                </Col>
                                
                            </Row>

                        </Col>

                    </Row>


                </form>
            </SignInWrapper>

        </Container>
    )
}

export default SignInContainer;
