import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: ${({theme}) => theme.pallet.primary};
`;

const Navigation = styled.nav`
    margin: 0px auto;
    padding: ${({theme}) => theme.spacing(1)} 0px;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RoutesList = styled.ul`
    display: flex;
    justify-content: flex-start;

    list-style: none;
`;

const MenuItem = styled.li`
    margin: 0px ${({theme}) => theme.spacing(1)};
    padding: ${({theme}) => theme.spacing(1)};
    color: ${({theme}) => theme.pallet.text};
    font-size: 1rem;
`;

const LogoWraper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: ${({theme}) => theme.spacing(4)};

    h3 {
        font-size: 1.3rem;
        user-select: none;
    }
`;

const MainContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Anchor = styled.a`
    color: ${({theme}) => theme.pallet.white};
    background: ${({theme}) => theme.pallet.link};

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0px 0px 0px ${({theme}) => theme.spacing(1)};

    span {
        padding: ${({theme}) => `${theme.spacing(1)} ${theme.spacing(2)}` };
    }
`;

export { HeaderWrapper, Navigation, RoutesList, MenuItem, LogoWraper, MainContent, Anchor };
