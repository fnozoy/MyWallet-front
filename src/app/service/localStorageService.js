export default class LocalStorageService {

    static addItem(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key){
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    }

}
