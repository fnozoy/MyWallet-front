import ApiService from './apiservice'

class UserService extends ApiService {

    constructor () {
        super('/api/user')
    }

    authenticate(credential){
        return this.post('/v1/authenticate', credential)
    }

    
    signup(credential){
        return this.post('/v1/signup', credential)

    }


}

export default UserService