import Cookie from 'js-cookie';
import {AuthCookieEnum} from '../constants/AuthSessionConstant';

interface SetCookieI {
    bearerToken: string,
    expires: Date,
}

class AuthCookieService {
    static setCookie({bearerToken, expires}: SetCookieI): void {
        Cookie.set(AuthCookieEnum.CURRENT_COOKIE, `Bearer ${bearerToken}`, {
            expires,
        });
    }

    static getCookie(): string | undefined {
        return Cookie.get(AuthCookieEnum.CURRENT_COOKIE);
    }

    static clearCookie(): void {
        Cookie.remove(AuthCookieEnum.CURRENT_COOKIE);
    }
}

export default AuthCookieService;
