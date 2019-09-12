class Rooms {
    constructor(data, dailyBookings) {
        this.data = data;
        this.dailyBookings = dailyBookings;
// date
    }

    getAvailableRoomsToday(date) {
        let availableBookings = this.data.bookings.bookings.filter(booking => {
            return booking.date !== date
        })
        return availableBookings
    }

    getDailyBookings(date) {
        this.dailyBookings = this.data.bookings.bookings.filter(booking => {
            return booking.date === date
        })
        return this.dailyBookings
    }

    todaysTotalRevenue() {
        return this.data.rooms.rooms.reduce((acc, room) => {
            this.dailyBookings.forEach(bookedRoom => {
                if (bookedRoom.roomNumber === room.number) {
                    acc += room.costPerNight
                }
            })
            return acc
        }, 0)
    }

    getDateWithMostBookings() {
        // this.data.bookings.forEach(booking => {
        //     let month = booking.date.split('/')[1]
        // })
    }
}
export default Rooms;

            // getDateWithLeastBookings()
            // roomsOccupiedToday() ^ I think it's the same functionality as getDailyBookings