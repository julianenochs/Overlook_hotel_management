class Manager {
    constructor(data) {
        this.data = data;
        this.currentGuest = [];
    }

    searchGuest(name) {
        let searchedGuest = this.data.users.users.find(guest => {
            return guest.name.toLowerCase() === name.toLowerCase()
        });
        return searchedGuest
    }

    addGuest(name) {
        console.log(this.currentGuest)
        this.currentGuest.push(name)
        return this.currentGuest = {
            name: name,
            id: this.currentGuest.length + 1
        }
    }
}

export default Manager;