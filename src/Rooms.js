class Rooms {
    constructor(data) {
        this.data = data;
// date
    }

    getAvailableRoomsToday(date) {
        let availableBookings = this.data.bookings.filter(booking => {
            return booking.date !== date
        })
        // console.log(availableBookings)
        // availableBookings.forEach(room => {
        // 
        // })
    }

    getDailyBookings(date) {
        let dailyBookings = this.data.bookings.filter(booking => {
            return booking.date === date
        })
        return dailyBookings
    }

    todaysTotalRevenue(date) {
        let todaysBookings = this.data.bookings.filter(bookings => {
            return bookings.date === date
        }).map(room => {return room.roomNumber})
        let rooms = todaysBookings.forEach(roomNumber => {
            this.data.rooms.filter(room => {
                return room.number === roomNumber
            }).reduce((totalPrice, room) => {
                totalPrice += room.costPerNight
                return totalPrice
            }, 0);
            return rooms
        });
    }
    // getDateWithMostBookings()
    // getDateWithLeastBookings()
    // roomsOccupiedToday() ^ I think it's the same functionality as getDailyBookings
}

export default Rooms;