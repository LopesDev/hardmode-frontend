import {
    HeaderWrapper, Navigation, RoutesList, MenuItem, LogoWraper, MainContent, Anchor
} from './styled';

function Header() {
    return (
        <HeaderWrapper>
            <Navigation>

                <MainContent>
                    <LogoWraper>

                        <img  />
                        <h3>HardMode</h3>

                    </LogoWraper>

                    <RoutesList>

                        <MenuItem>Home</MenuItem>
                        <MenuItem>Membros</MenuItem>

                    </RoutesList>
                </MainContent>

                <RoutesList>

                    <MenuItem>Login</MenuItem>
                    <Anchor href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <span>Registre-se</span>
                    </Anchor>

                </RoutesList>

            </Navigation>
        </HeaderWrapper>
    );
}

export default Header;
