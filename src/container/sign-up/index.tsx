
import React, { FormEvent, useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import Cropper from 'react-easy-crop'
import validator from 'validator';

import getCroppedImg from '../../utils/file.utils';

import {
    SignUpWrapper, FormHeader, FormSectionTitle, Content, ModalContent,
    CropperWrapper, ModalFooter, ZoomWrapper
} from './styled';

import { Row, Col } from '../../components/grid';
import InputGroup from '../../components/group-input';
import Modal from '../../components/modal';
import Button from '../../components/button';

import {
    ContactCard, FacebookIcon, Github, ImagePlaceholder, InstagramCircle, Mail, LockMultiple, Person,
    Phone, Steam
} from '../../icons';

const fieldInitialState = { value: '', validated: false, prestine: true, errorMsg: '' }

function SignUpContainer(): JSX.Element {

    const theme = useTheme();

    // Cropping config
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    // File states.
    const [userProfileFile, setUserProfileFile] = useState<File>();
    const [userProfileUrl, setUserProfileUrl] = useState<string | ArrayBuffer>();

    // Form input fields.
    const [fullName, setFullName] = useState(fieldInitialState);
    const [email, setEmail] = useState(fieldInitialState);
    const [nickName, setNickName] = useState(fieldInitialState);
    const [phoneNumber, setPhoneNumber] = useState(fieldInitialState);
    const [password, setPassword] = useState(fieldInitialState);
    const [confirmPassword, setConfirmPassword] = useState(fieldInitialState);

    const [steamUrl, setSteamUrl] = useState(fieldInitialState);
    const [instagramUrl, setInstagramUrl] = useState(fieldInitialState);
    const [facebookUrl, setFacebookUrl] = useState(fieldInitialState);
    const [gitHubUrl, setGitHubUrl] = useState(fieldInitialState);

    const [modalOpen, setModalOpen] = useState(false);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                userProfileUrl,
                croppedAreaPixels
            );

            const NewFile = await fetch(croppedImage as string)
                .then(r => r.blob())
                .then(blobFile => new File(
                    [blobFile],
                    userProfileFile.name,
                    {
                        type: userProfileFile.type,
                        lastModified: userProfileFile.lastModified
                    }
                ));

            setCroppedImage(croppedImage);
            setUserProfileFile(NewFile);
            setModalOpen(false);
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels]);

    const onClose = useCallback(() => {
        setCroppedImage(null)
    }, []);

    const validateFields = (): boolean => {
        const fieldsValidated = [
            fullName.validated,
            email.validated,
            nickName.validated,
            confirmPassword.validated,
            password.validated,
            phoneNumber.prestine || phoneNumber.validated,
            steamUrl.prestine || steamUrl.validated,
            instagramUrl.prestine || instagramUrl.validated,
            facebookUrl.prestine || facebookUrl.validated,
            gitHubUrl.prestine || gitHubUrl.validated,
        ];

        return fieldsValidated.every(field => field);

    }

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const requiredFields = [
            'fullName',
            'email',
            'nickName',
            'password',
            'confirmPassword'
        ];

        for (const id of requiredFields) {
            const element = document.getElementById(id);
            setTimeout(() => {
                element.focus();
                element.blur();
            }, 10);
        }


        if (validateFields()) {
            console.log('Chamar a api de criar conta!');
        } else {
            console.log('Formulário inválido!');
        }
    }

    return (
        <Content>

            <SignUpWrapper>
                <form onSubmit={handleFormSubmit}>
                    <FormHeader>
                        <h1>Criar conta</h1>
                        <p>Preencha os campos obrigatórios e crie agora mesmo sua conta</p>
                    </FormHeader>

                    <FormSectionTitle>Foto de usuário</FormSectionTitle>

                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <InputGroup
                                    type="file"
                                    id="profilePicture"
                                    label="Foto de perfil"
                                    previewImage={croppedImage}
                                    iconPrefix={<ImagePlaceholder color={theme.pallet.text} height={32} width={32} />}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>, file: File) => {
                                            console.log(file);
                                            setUserProfileFile(file);

                                            const reader = new FileReader();
                                            reader.onload = function(event) {
                                                setUserProfileUrl(reader.result);

                                                setModalOpen(true);
                                            }

                                            reader.readAsDataURL(file);
                                            return;
                                        }
                                    }
                                />

                                {userProfileFile && (
                                    <label style={{ paddingLeft: theme.spacing(3), userSelect: 'none' }}>{userProfileFile.name}</label>
                                )}
                            </div>
                        </Col>

                        <Col xs={12} md={12} lg={12}>
                            <hr />
                        </Col>
                    </Row>

                    <FormSectionTitle>Dados pessoais</FormSectionTitle>

                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="fullName"
                                label="Nome completo"
                                iconPrefix={<ContactCard />}
                                onFocus={(event) => {
                                    setFullName({
                                        ...fullName,
                                        prestine: false,
                                    });
                                }}
                                onChange={(event) => {
                                    setFullName({
                                        ...fullName,
                                        value: event.target.value,
                                    });
                                }}
                                onBlur={(event) => {
                                    const minLenght = validator.isLength(fullName.value, {min: 5});

                                    setFullName({
                                        ...fullName,
                                        validated: Boolean(fullName.value) && minLenght,
                                        errorMsg: minLenght ? '' : 'Este campo precisa ter no mínimo 5 caracteres'
                                    });
                                }}
                                {...fullName}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="email"
                                id="email"
                                label="E-mail"
                                iconPrefix={<Mail />}
                                onFocus={(event) => {
                                    setEmail({
                                        ...email,
                                        prestine: false,
                                    });
                                }}
                                onChange={(event) => {
                                    setEmail({
                                        ...email,
                                        value: event.target.value
                                    });
                                }}
                                onBlur={(event) => {
                                    const isValidEmail = validator.isEmail(email.value);

                                    setEmail({
                                        ...email,
                                        validated: Boolean(email.value) && isValidEmail,
                                        errorMsg: isValidEmail ? '' : 'Informe um e-mail válido'
                                    });
                                }}
                                {...email}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="nickName"
                                label="Nickname em jogos"
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
                                        value: event.target.value
                                    });
                                }}
                                onBlur={(event) => {
                                    setNickName({
                                        ...nickName,
                                        validated: Boolean(nickName.value),
                                        errorMsg: Boolean(nickName.value) ? '' : 'Este campo é obrigatório'
                                    });
                                }}
                                {...nickName}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="tel"
                                id="phone"
                                label="Número de celular"
                                iconPrefix={<Phone />}
                                onFocus={(event) => {
                                    setPhoneNumber({
                                        ...phoneNumber,
                                        prestine: false,
                                    });
                                }}
                                onChange={(event) => {
                                    const value = event.target.value
                                        .replace(/\D/g, '')
                                        .replace(/(\d{2})(\d)/, '($1) $2')
                                        .replace(/(\d{4})(\d)/, '$1-$2')
                                        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
                                        .replace(/(-\d{4})\d+?$/, '$1');

                                    setPhoneNumber({
                                        ...phoneNumber,
                                        value
                                    });
                                }}
                                onBlur={(event) => {
                                    const validatedNumber = validator.isMobilePhone(phoneNumber.value, 'pt-BR');

                                    setPhoneNumber({
                                        ...phoneNumber,
                                        validated: validator.isEmpty(phoneNumber.value) || validatedNumber,
                                        errorMsg: validatedNumber ? '' : 'Número de telefone inválido'
                                    });
                                }}
                                {...phoneNumber}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={3}>
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
                                    });
                                }}
                                {...password}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={3}>
                            <InputGroup
                                type="password"
                                id="confirmPassword"
                                label="Confirmar senha"
                                iconPrefix={<LockMultiple />}
                                onFocus={(event) => {
                                    setConfirmPassword({
                                        ...confirmPassword,
                                        prestine: false
                                    });
                                }}
                                onChange={(event) => {
                                    setConfirmPassword({
                                        ...confirmPassword,
                                        value: event.target.value
                                    });
                                }}
                                onBlur={(event) => {
                                    setConfirmPassword({
                                        ...confirmPassword,
                                        validated: Boolean(confirmPassword.value) && password.value === confirmPassword.value,
                                        errorMsg:  password.value === confirmPassword.value ? '' : 'As senhas não estão iguais'
                                    });
                                }}
                                {...confirmPassword}
                            />
                        </Col>

                    </Row>

                    <FormSectionTitle>Redes sociais</FormSectionTitle>

                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="url"
                                id="steamUrl"
                                label="Perfil da steam"
                                iconPrefix={<Steam color={theme.pallet.title} />}
                                onFocus={(event) => {
                                    setSteamUrl({
                                        ...steamUrl,
                                        prestine: false
                                    });
                                }}
                                onChange={(event) => {
                                    setSteamUrl({
                                        ...steamUrl,
                                        value: event.target.value
                                    });
                                }}
                                onBlur={(event) => {
                                    const isUrl = validator.isURL(steamUrl.value);

                                    setSteamUrl({
                                        ...steamUrl,
                                        validated: validator.isEmpty(steamUrl.value) || isUrl,
                                        errorMsg: isUrl ? '' : 'Digite um URL válida'
                                    });
                                }}
                                {...steamUrl}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="url"
                                id="instagramUrl"
                                label="Instagram"
                                iconPrefix={<InstagramCircle />}
                                onFocus={(event) => {
                                    setInstagramUrl({
                                        ...instagramUrl,
                                        prestine: false,
                                    });
                                }}
                                onChange={(event) => {
                                    setInstagramUrl({
                                        ...instagramUrl,
                                        value: event.target.value
                                    });
                                }}
                                onBlur={(event) => {
                                    const isUrl = validator.isURL(instagramUrl.value);

                                    setInstagramUrl({
                                        ...instagramUrl,
                                        validated: validator.isEmpty(instagramUrl.value) && isUrl,
                                        errorMsg: isUrl ? '' : 'Digite um URL válida'
                                    });
                                }}
                                {...instagramUrl}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="url"
                                id="facebookUrl"
                                label="Facebook"
                                iconPrefix={<FacebookIcon />}
                                onFocus={(event) => {
                                    setFacebookUrl({
                                        ...facebookUrl,
                                        prestine: false
                                    });
                                }}
                                onChange={(event) => {
                                    setFacebookUrl({
                                        ...facebookUrl,
                                        value: event.target.value
                                    });
                                }}
                                onBlur={(event) => {
                                    const isUrl = validator.isURL(facebookUrl.value);

                                    setFacebookUrl({
                                        ...facebookUrl,
                                        validated: validator.isEmpty(facebookUrl.value) && isUrl,
                                        errorMsg: isUrl ? '' : 'Digite um URL válida'
                                    });
                                }}
                                {...facebookUrl}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="url"
                                id="githubUrl"
                                label="Perfil no GitHub"
                                iconPrefix={<Github />}
                                onFocus={(event) => {
                                    setGitHubUrl({
                                        ...gitHubUrl,
                                        prestine: false
                                    });
                                }}
                                onChange={(event) => {
                                    setGitHubUrl({
                                        ...gitHubUrl,
                                        value: event.target.value
                                    });
                                }}
                                onBlur={(event) => {
                                    const isUrl = validator.isURL(gitHubUrl.value);

                                    setGitHubUrl({
                                        ...gitHubUrl,
                                        validated: validator.isEmpty(gitHubUrl.value) && isUrl,
                                        errorMsg: isUrl ? '' : 'Digite um URL válida'
                                    });
                                }}
                                {...gitHubUrl}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                                <Button type="submit" btnType="info">
                                    Criar conta
                                </Button>

                            </div>

                        </Col>
                    </Row>

                </form>
            </SignUpWrapper>

            <Modal
                isOpen={modalOpen}
                onRequestClose={() => {
                    setModalOpen(false);
                }}
                contentLabel="Content Label"
            >
                <ModalContent>
                    <CropperWrapper>
                        <Cropper
                            image={userProfileUrl as string}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            cropShape="round"
                            showGrid={false}
                        />
                        
                        <ZoomWrapper>
                            <InputGroup
                                type="range"
                                id="imageZoom"
                                label="Zoom"
                                min={1}
                                max={3}
                                step="0.1"
                                defaultValue={0}
                                onChange={e => {
                                    const value = parseFloat(e.target.value);
                                    setZoom(value);
                                }}
                                className="zoom-input-range"
                            />
                        </ZoomWrapper>

                    </CropperWrapper>

                    <ModalFooter>

                        <div style={{ paddingTop: theme.spacing(2) }}>
                            <Button
                                onClick={() => {
                                    setModalOpen(false);
                                }}
                                type="button"
                            >
                                Cancelar
                            </Button>
                        </div>

                        <div style={{ paddingTop: theme.spacing(2) }}>
                            <Button
                                onClick={showCroppedImage}
                                type="button"
                                btnType="primary"
                            >
                                Confirmar
                            </Button>
                        </div>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Content>
    )
}

export default SignUpContainer;
