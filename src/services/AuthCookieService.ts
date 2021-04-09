import Cookie from 'js-cookie';
import {AuthCookieEnum} from '../constants/AuthSessionConstant';

interface SetCookieI {
    bearerToken: string,
    expires: Date,
}

class AuthCookieService {
    static setCookie({bearerToken, expires}: SetCookieI) {
        Cookie.set(AuthCookieEnum.CURRENT_COOKIE, `Bearer ${bearerToken}`, {
            expires,
        });
    }

    static getCookie(): string {
        return Cookie.get(AuthCookieEnum.CURRENT_COOKIE);
    }

    clearCookie() {
        Cookie.remove(AuthCookieEnum.CURRENT_COOKIE);
    }
}

export default AuthCookieService;
