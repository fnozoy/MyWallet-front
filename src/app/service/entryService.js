import ApiService from './apiservice'

class EntryService extends ApiService {

    constructor () {
        super('/api/entry')
    }

    getBalance(id){
        return this.get(`/api/entry/v1/getbalance/${id}`);

    }

    deleting(id){
        return this.delete(`/api/entry/v1/delete/${id}`);
    }

    search(entryFilter){
        let parameters = `year=${entryFilter.year}&userId=${entryFilter.userId}`

        if (entryFilter.month){
            parameters = `${parameters}&month=${entryFilter.month}` 
        }

        if (entryFilter.entryCode){
            parameters = `${parameters}&code=${entryFilter.entryCode}` 
        }

        if (entryFilter.entryStatus){
            parameters = `${parameters}&status=${entryFilter.entryStatus}` 
        }
        
        if (entryFilter.description){
            parameters = `${parameters}&description=${entryFilter.description}` 
        }
        
        return this.get(`/api/entry/v1/search?${parameters}`);

    }

    getMonthsList() {
        return [
            { label: 'Choose the month to search...', value: ''},
            { label: 'January', value: 1},
            { label: 'February', value: 2},
            { label: 'March', value: 3},
            { label: 'April', value: 4},
            { label: 'May', value: 5},
            { label: 'June', value: 6},
            { label: 'July', value: 7},
            { label: 'August', value: 8},
            { label: 'September', value: 9},
            { label: 'October', value: 10},
            { label: 'November', value: 11},
            { label: 'December', value: 12}
        ]
    }

    getEntryTypes() {
        return [
            { label: 'Choose the entry type to search...', value: ''},
            { label: 'Income', value: 'INCOME'},
            { label: 'Outcome', value: 'OUTCOME'}
        ]

    }

}

export default EntryService