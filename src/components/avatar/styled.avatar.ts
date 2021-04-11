import styled from 'styled-components';

interface PhotoProps {
    photo: string
}

const Photo = styled.div<PhotoProps>`
    width: 100%;
    height: 100%;
    background-image: url("${({photo}) => photo}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
`;

const AvatarWrapper = styled.div`
    width: ${({theme}) => theme.spacing(6)};
    height: ${({theme}) => theme.spacing(6)};
    padding: ${({theme}) => theme.spacing(.5)};
`;

export {Photo, AvatarWrapper};
