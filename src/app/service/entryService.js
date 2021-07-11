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

    create(entry){
        return this.post('/v1/create', entry);
    }
    
    update(entry){
        return this.put('/api/entry/v1/update', entry);
    }
    
    updateStatus(entry){
        return this.put('/api/entry/v1/updatestatus', entry);
    }

    findById(id){
        return this.get(`/api/entry/v1/getEntryById/${id}`);
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
            { label: 'Choose the month...', value: ''},
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
            { label: 'Choose the entry type...', value: ''},
            { label: 'Income', value: 'INCOME'},
            { label: 'Outcome', value: 'OUTCOME'}
        ]

    }

    validate(entry){
        const msgs = []

        if(!entry.description){
            msgs.push('Description is mandatory.')
        }
        if(!entry.year){
            msgs.push('Year is mandatory.')
        }
        if(!entry.month){
            msgs.push('Month is mandatory.')            
        }
        if(!entry.value){
            msgs.push('Value is mandatory.')            
        }
        if(!entry.entryCode){
            msgs.push('Entry type is mandatory.')            
        }
        return msgs;
    }
}

export default EntryService