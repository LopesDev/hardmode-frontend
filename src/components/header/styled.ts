import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: ${({theme}) => theme.pallet.primary};
`;

const Navigation = styled.nav`
    margin: 0px auto;
    max-width: 1200px;
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
`;

export { HeaderWrapper, Navigation, RoutesList, MenuItem };
