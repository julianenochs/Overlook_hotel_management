class Rooms {
    constructor(data, bookingsData) {
        this.data = data;
        this.bookingsData = bookingsData
// date
    }

    getAvailableRoomsToday(date) {
        let availableBookings = this.bookingsData.bookings.filter(booking => {
            return booking.date !== date
        })
        // console.log(availableBookings)
        // availableBookings.forEach(room => {
        // 
        // })
    }

    getDailyBookings(date) {
        let dailyBookings = this.bookingsData.bookings.filter(booking => {
            return booking.date === date
        })
        return dailyBookings
    }

    todaysTotalRevenue() {
        
    }
    // getDateWithMostBookings()
    // getDateWithLeastBookings()
    // roomsOccupiedToday() ^ I think it's the same functionality as getDailyBookings
}

export default Rooms;