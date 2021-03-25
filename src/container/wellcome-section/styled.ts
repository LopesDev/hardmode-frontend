import styled from 'styled-components';

const WellcomeSection = styled.section`
    display: flex;
    align-items: center;

    margin: 0px auto;
    padding: ${({theme}) => theme.spacing(16)} 0px;

    max-width: 1200px;
`;

const SVGWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    flex: 1;
`;

const WellcomeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    flex: 1;

    h3 {
        font-size: 2.3rem;
        margin-bottom: ${({theme}) => theme.spacing(4)};
        font-family: ${({theme}) => theme.typografy.title.fontFamily};
    }

    p {
        line-height: 23.35px;
        font-size: 1rem;
        margin-bottom: ${({theme}) => theme.spacing(4)};
    }
`;

const BoxFooter = styled.footer`
    width: 100%;

    display: flex;
    align-items: center;
`;

const AnchorWithIcon = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background: ${({theme}) => theme.pallet.link};

    padding: ${({theme}) => `${theme.spacing(2)} ${theme.spacing(4)}`};
    margin-right: ${({theme}) => theme.spacing(4)};
    border-radius: ${({theme}) => theme.spacing(.5)};

    span {
        color: ${({theme}) => theme.pallet.white};
        font-size: 1.3rem;
    }

    img {
        padding-left: ${({theme}) => theme.spacing(1)};
    }
`;

const Anchor = styled.a`
    color: ${({theme}) => theme.pallet.link};
`;

export {
    WellcomeSection, WellcomeBox, SVGWrapper, BoxFooter, AnchorWithIcon, Anchor
};
