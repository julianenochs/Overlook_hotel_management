class Rooms {
    constructor(data, dailyBookings) {
        this.data = data;
        this.dailyBookings = dailyBookings;
// date
    }

    getAvailableRooms(date) {
        let availableRoomNumbers = this.data.bookings.filter(booking => booking.date !== date)
        return availableRoomNumbers.length
    }

    getDailyBookings(date) {
        this.dailyBookings = this.data.bookings.filter(booking => {
            return booking.date === date
        })
        return this.dailyBookings
    }

    todaysTotalRevenue(today) {
        let total = this.data.bookings.filter(booking => booking.date === today)
        .reduce((acc, bookedRoom) => {
            this.data.rooms.forEach(room => {
                if (bookedRoom.roomNumber === room.number) {
                    acc += room.costPerNight
                }
            })
            return acc
        }, 0)
        return total.toFixed(2)
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