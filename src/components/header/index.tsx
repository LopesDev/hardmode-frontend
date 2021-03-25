import Link from 'next/link';

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

                        <MenuItem>
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/members">
                                <a>
                                    Membros
                                </a>
                            </Link>
                        </MenuItem>

                    </RoutesList>
                </MainContent>

                <RoutesList>

                    <MenuItem>
                        <Link href="/login">
                            <a>
                                Login
                            </a>
                        </Link>
                    </MenuItem>
                    <Anchor href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <span>Registre-se</span>
                    </Anchor>

                </RoutesList>

            </Navigation>
        </HeaderWrapper>
    );
}

export default Header;
