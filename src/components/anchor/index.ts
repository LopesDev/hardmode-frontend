import styled from 'styled-components';

import { AnchorProps } from './anchor.types';

const Anchor = styled.a<AnchorProps>`
    appearance: none;
    cursor: pointer;

    transition: opacity 300ms ease-in-ease-out;

    color: ${({theme}) => theme.pallet.link};

    &:hover {
        opacity: 0.8;
    }
`;

export default Anchor;