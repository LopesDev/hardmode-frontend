import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: ${({theme}) => theme.pallet.primary};
`;

const Navigation = styled.nav`
    margin: 0px auto;
    padding: 0px ${({theme}) => theme.spacing(8)};
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RoutesList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    list-style: none;
`;

const MenuItem = styled.li`
    margin: 0px ${({theme}) => theme.spacing(1)};
    padding: ${({theme}) => theme.spacing(2)};

    color: ${({theme}) => theme.pallet.text};

    font-size: 1rem;
    font-weight: 500;

    transition: color 250ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.pallet.link};
    }
`;

const LogoWraper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: ${({theme}) => theme.spacing(4)};

    h3 {
        font-size: 1.3rem;
        user-select: none;
        font-family: ${({theme}) => theme.typografy.title.fontFamily};
    }
`;

const MainContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Anchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0px 0px 0px ${({theme}) => theme.spacing(1)};

    span {
        padding: ${({theme}) => `${theme.spacing(1)} ${theme.spacing(2)}`};

        color: ${({theme}) => theme.pallet.white};
        background: ${({theme}) => theme.pallet.link};

        border-radius: ${({theme}) => theme.spacing(.5)};
    }
`;

export { HeaderWrapper, Navigation, RoutesList, MenuItem, LogoWraper, MainContent, Anchor };
