import {Photo, AvatarWrapper} from './styled.avatar';

function Avatar({photo}: {photo: string}): JSX.Element {
    return (
        <AvatarWrapper>
            <Photo photo={photo} />
        </AvatarWrapper>
    );
}

export default Avatar;
