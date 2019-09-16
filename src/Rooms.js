class Rooms {
    constructor(data, dailyBookings) {
        this.data = data;
        this.dailyBookings = dailyBookings;
        this.availableRooms;
// date
    }

    getAvailableRooms(date) {
        this.availableRooms = this.data.bookings.filter(booking => booking.date !== date)
        .map(room => room.roomNumber)
        return this.availableRooms
    }

    getNumberOfAvailableRooms() {
        return this.availableRooms.length
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
        return Number(total.toFixed(2))
    }

    availableRoomByType() {
        let bookable = this.data.rooms.filter(room => {
            return !this.availableRooms.includes(room.roomNumber)
        }).map(room => room.roomType)
        let uniqueSet = new Set(bookable)
        let bookableRooms = [...uniqueSet]
        return Array.from(new Set(bookableRooms))
    }
}
export default Rooms;

            // getDateWithLeastBookings()
            // roomsOccupiedToday() ^ I think it's the same functionality as getDailyBookings