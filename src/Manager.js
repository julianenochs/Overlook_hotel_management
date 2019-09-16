class Manager {
    constructor(data) {
        this.data = data;
        this.currentGuest = [];
    }

    searchGuest(name) {
        let searchedGuest = this.data.users.find(guest => {
            return guest.name.toLowerCase() === name.toLowerCase()
        });
        this.currentGuest.push(searchedGuest)
            return this.currentGuest
    }

    addGuest(name) {
        this.currentGuest.push(name)
        return this.currentGuest = {
            name: name,
            id: this.currentGuest.length + 1
        }
    }

    bookRoom() {
        
    }
}

export default Manager;