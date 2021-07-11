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

    validate(){
        const msgs = []

        if(!this.state.name){
            msgs.push('Name is mandatory.')
        }
        if(!this.state.email){
            msgs.push('Email is mandatory.')
        } else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Inform a valid email.')
        }
        if(!this.state.pswd){
            msgs.push('Password is mandatory.')            
        } else if(this.state.pswd !== this.state.pswd2) {
            msgs.push('Password did not match. Password and Confirmation must be the same')
        }

        return msgs;
    }

}

export default UserService