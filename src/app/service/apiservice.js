import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://mywallet-fnozoy-api.herokuapp.com/'

})

class ApiService {
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post (url, object){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl, object);
    }
    put (url, object){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(url, object);
    }
    delete (url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(url);
    }
    get (url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(url);
    }
}
export default ApiService