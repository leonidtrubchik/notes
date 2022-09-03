
const STORE_KEY = 'STORE_KEY'

class Store {

    
    getNotes() {
        let data = localStorage.getItem(STORE_KEY);
        data = JSON.parse(data) || [];
        return data;
    }

    addNote(note) { 
        let data = this.getNotes();
        data.push(note);

        localStorage.setItem(STORE_KEY, JSON.stringify(data));

    }

    removeNote(note) {
        
    }
}

export default new Store();
