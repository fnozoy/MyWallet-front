import ApiService from './apiservice'

class EntryService extends ApiService {

    constructor () {
        super('/api/entry')
    }

    getBalance(id){
        return this.get(`/api/entry/v1/getbalance/${id}`);

    }

}

export default EntryService