import { HeaderWrapper, Navigation, RoutesList, MenuItem } from './styled';

function Header() {
    return (
        <HeaderWrapper>
            <Navigation>

                <RoutesList>

                    <MenuItem>Home</MenuItem>
                    <MenuItem>Membros</MenuItem>

                </RoutesList>

            </Navigation>
        </HeaderWrapper>
    );
}

export default Header;
