import Cookie from 'js-cookie';
import {AuthSessionEnum} from '../constants/AuthSessionConstant';

interface SetCookieI {
    bearerToken: string,
    expires: Date,
}

class AuthSessionService {
    static setSession({bearerToken, expires}: SetCookieI) {
        Cookie.set(AuthSessionEnum.CURRENT_SESSION, `Bearer ${bearerToken}`, {
            expires,
        });
    }

    static getSession(): string {
        return Cookie.get(AuthSessionEnum.CURRENT_SESSION);
    }

    clearCookie() {
        Cookie.remove(AuthSessionEnum.CURRENT_SESSION);
    }
}

export default AuthSessionService;
