
import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import Cropper from 'react-easy-crop'

import getCroppedImg from '../../utils/file.utils';

import {
    SignUpWrapper, FormHeader, FormSectionTitle, Content, Center, ModalContent,
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

/**
 * 
 * @todo Finalizar o fluxo de adicionar foto de usuário, doc da lib de crop => https://ricardo-ch.github.io/react-easy-crop/
 */
function SignUpContainer() {

    const theme = useTheme();

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const [userProfileFile, setUserProfileFile] = useState<File>();
    const [userProfileUrl, setUserProfileUrl] = useState<string | ArrayBuffer>();
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

            console.log('donee', { croppedImage });
            setCroppedImage(croppedImage);
            setModalOpen(false);
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels]);

    const onClose = useCallback(() => {
        setCroppedImage(null)
    }, []);

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
                            </Center>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="fullName"
                                label="Nome completo"
                                iconPrefix={<ContactCard />}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="email"
                                label="E-mail"
                                iconPrefix={<Mail />}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="nickName"
                                label="Nickname em jogos"
                                iconPrefix={<Person />}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="phone"
                                label="Número de celular"
                                iconPrefix={<Phone />}
                            />
                        </Col>


                        <Col xs={12} md={6} lg={3}>
                            <InputGroup
                                type="password"
                                id="password"
                                label="Senha"
                                iconPrefix={<LockMultiple />}
                            />
                        </Col>

                        <Col xs={12} md={6} lg={3}>
                            <InputGroup
                                type="password"
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
                                type="text"
                                id="steamUrl"
                                label="Perfil da steam"
                                iconPrefix={<Steam color={theme.pallet.title} />}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="instagramUrl"
                                label="Instagram"
                                iconPrefix={<InstagramCircle />}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="facebookUrl"
                                label="Facebook"
                                iconPrefix={<FacebookIcon />}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <InputGroup
                                type="text"
                                id="githubUrl"
                                label="Perfil no GitHub"
                                iconPrefix={<Github />}
                            />
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
