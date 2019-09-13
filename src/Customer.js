class Customer {
    constructor(data) {
        this.data = data;
// orders
    }

    filterRoomsByType(roomType) {
        return this.data.rooms.filter(room => {
            return room.roomType === roomType
        });
    }
    // bookRoom() {

    // }
    // unbookRoom()
    // upgradeRoom()
    // getTotalBill()
    // pastBookings()
}

export default Customer;