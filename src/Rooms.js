class Rooms {
    constructor(data) {
        this.data = data;
        this.dailyBookings;
        this.availableRooms;
    }

    getAvailableRooms(date) {
        this.availableRooms = this.data.bookings.filter(booking => booking.date !== date)
        .map(room => room.roomNumber);
        return this.availableRooms;
    }

    getNumberOfAvailableRooms() {
        return this.availableRooms.length;
    }

    todaysTotalRevenue(today) {
        let total = this.data.bookings.filter(booking => booking.date === today)
        .reduce((acc, bookedRoom) => {
            this.data.rooms.forEach(room => {
                if (bookedRoom.roomNumber === room.number) {
                    acc += room.costPerNight;
                }
            })
            return acc;
        }, 0);
        return Number(total.toFixed(2));
    }

    availableRoomByType(type) {
        let allRooms = this.data.rooms.filter(room => room.roomType === type)
        .filter(room => {
            return !this.availableRooms.includes(room.roomNumber);
        });
        return allRooms;
    }

    availableRoomMenu() {
        let bookable = this.data.rooms.filter(room => {
            return !this.availableRooms.includes(room.roomNumber)
        })
        .map(room => room.roomType)
        let uniqueSet = new Set(bookable);
        let bookableRooms = [...uniqueSet];
        return Array.from(new Set(bookableRooms));
    }

    getPercentageOfRoomsOccupied(today) {
        this.availableRooms = this.data.bookings.filter(booking => {
            return booking.date !== today;
        });
        return Number(((this.availableRooms.length / 2001) * 100)).toFixed(2);
    }

    getCustomerBookingHistory(id) {
        let guestBookings = this.data.bookings.filter(booking => booking.userID === id);
            return guestBookings;
    }

    getBookingsByFrequency() {
        let occurence = this.data.bookings.reduce((acc, booking) => {
            if (!acc[booking.date]) {
                acc[booking.date] = 1
            }
            acc[booking.date] += 1
            return acc;
        }, {});
        return occurence
    }

    getDateWithMostBookings() {
        let popular = this.getBookingsByFrequency();
        return Object.keys(popular)[0];
    }

    getDateWithLeastBookings() {
        let notPopular = this.getBookingsByFrequency();
        let index = Object.keys(notPopular);
        let reversedIndex = index.reverse();
        return reversedIndex[0];
    }

    makeNewBooking(id, date, roomNumber) {
        let newBooking = {
            userID: id,
            date,
            roomNumber
        };
        return this.data.bookings.push(newBooking);
    }
}
export default Rooms;