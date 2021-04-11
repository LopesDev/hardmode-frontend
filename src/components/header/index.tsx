import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';

import Avatar from '../avatar';

import {
    HeaderWrapper, Navigation, RoutesList, MenuItem, LogoWraper, MainContent, Anchor
} from './styled';

function Header() {
    const { user, signOut } = useAuth();

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
                    {user ? (<>
                        <MenuItem>
                            <Link href="/">
                                <Anchor onClick={signOut}>
                                    Sair
                                </Anchor>
                            </Link>
                        </MenuItem>
                        <Avatar photo={user.profileImage} />
                    </>) : (<>
                    <MenuItem>
                        <Link href="/sign-in">
                            <a>
                                Login
                            </a>
                        </Link>
                    </MenuItem>
                    <Link href="/sign-up">
                        <Anchor>
                            <span>Registre-se</span>
                        </Anchor>
                    </Link>
                    </>) }
                </RoutesList>

            </Navigation>
        </HeaderWrapper>
    );
}

export default Header;
