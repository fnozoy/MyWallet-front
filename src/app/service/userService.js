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

    validate(user){
        const msgs = []

        if(!user.name){
            msgs.push('Name is mandatory.')
        }
        if(!user.email){
            msgs.push('Email is mandatory.')
        } else if(!user.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Inform a valid email.')
        }
        if(!user.pswd){
            msgs.push('Password is mandatory.')            
        } else if(user.pswd !== user.pswd2) {
            msgs.push('Password did not match. Password and Confirmation must be the same')
        }

        return msgs;
    }

}

export default UserService