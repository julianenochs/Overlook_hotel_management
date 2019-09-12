class Manager {
    constructor(data) {
        this.data = data;
        this.currentGuest;
    }

    searchGuest(name) {
        this.currentGuest = this.data.users.find(guest => {
            return guest.name === name
        });
        if (this.currentGuest !== undefined) {
            domUpdates.noGuestFoundError();
        } else {
            domUpdates.showGuestInfo();
            return this.currentGuest
        }
    }

    addGuest(name) {
        this.currentGuest = name
        return this.currentGuest
    }
}

export default Manager;