import LocalStorageService from "./localStorageService";

export const USER_LOGGED = '_user_Logged'

export default class AuthService {

    static isUserAuthenticated () {        
        const userLogged = LocalStorageService.getItem(USER_LOGGED);
        return userLogged && userLogged.id
    }

    static removeUserAuthenticated () {
        LocalStorageService.removeItem(USER_LOGGED)
    }

    static loginUser(user){
        LocalStorageService.addItem(USER_LOGGED, user)
    }

    static getUserAuthenticated(){
        return LocalStorageService.getItem(USER_LOGGED)
    }


}
