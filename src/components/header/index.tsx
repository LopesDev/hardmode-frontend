import Link from 'next/link';

import {useCache} from '../../services/ApolloService';
import AuthCookieService from '../../services/AuthCookieService';
import GET_USER, {getUsetApolloInterface} from '../../services/queries/getUser';

import Avatar from '../avatar';

import {
    HeaderWrapper, Navigation, RoutesList, MenuItem, LogoWraper, MainContent, Anchor
} from './styled';

function Header() {
    const data:getUsetApolloInterface = useCache(GET_USER);

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
                    {data && data.getUser ? (<>
                        <MenuItem>
                            <Link href="/">
                                <Anchor onClick={AuthCookieService.clearCookie}>
                                    Sair
                                </Anchor>
                            </Link>
                        </MenuItem>
                        <Avatar photo={data.getUser.profileImage} />
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
