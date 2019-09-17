import $ from 'jquery';

const domUpdates = {

    showMain(today) {
        $('.splash-page').fadeOut();
        $('.add-guest__form').hide();
        $('.main').show();
        $('.no-guest-found__error').hide();
        $('.todays-date').text(today);
        $('.new-booking').hide();
        $('.single-room').hide()
        $('.suite').hide()
        $('.junior-suite').hide()
        $('.residential-suite').hide()
    },

    showAvailableRoomsToday(rooms) {
        $('.rooms-available-today').text(`${rooms} rooms are available tonight.`);
    },

    showAvailableRoomTypes(roomTypes) {
        roomTypes.forEach(type => {
            $('.room-types-available').append(`<p>`, {
                text: type,
                click: function() {
                    showRoomsByType()
                }
            });
        });
    },

    showPercentageOfRoomsOccupied(percentage) {
        $('.percentage-rooms-available').text(`That's ${percentage}% of all Ophelias rooms.`)
    },

    showRoomsByType() {
        console.log('hello world!')
    },

    showTodaysRevenue(total) {
        $('.revenue').text(`Todays Total Revenue: $${total}`);
    },

    showGuestSubmission() {
        $('.add-guest__form').show();
        $('.add-guest__button').hide();
        $('.guest-search__form').fadeOut();
    },

    noGuestFoundError() {
        $('.no-guest-found__error').show();
    },

    showNewGuestMessages(newGuest) {
        $('.guest-name').text(`${newGuest} is a new guest and has no history at Ophelias.`)
    },

    showGuestInfo(newGuest) {
        $('.add-guest__form').hide();
        $('.no-guest-found__error').hide();
        $('.guest-name-header').text(newGuest);
    },

    updateOrdersTab(name) {
        $('.guest-orders-info').text(`Orders for ${name}:`);
    },

    showDailyRoomServiceOrders(className, dailyOrders) {
        dailyOrders.forEach(order => {
            $(`.${className}`).append(`<tr>
            <td>Order Date: ${order.date.slice(5, 10)}</td>
            </tr><tr>
            <td>Total Cost: $${order.totalCost}</td>
            </tr>`)
        });
    },

    showNoOrderData() {
        $('#daily-room-services').text('There are no orders yet for today.')
    },

    showNoOrderDataForGuest() {
        $('.guest-orders-by-date').text('This guest has no orders for this date.')
    },

    showOrderHistoryByDate(orders) {
        orders.forEach(order => {
            $('.guest-orders-by-date').append(`<tr>
            <td>${order.date}</td>
            </tr><tr>
            <td>${order.totalCost}</td>
            </tr>`)
        })
    },

    updateGuestName(guest) {
        $('.guest-name').text(`Showing Information for ${guest}.`)
    },

    showCustomerBookingHistory(bookingHistory) {
        bookingHistory.forEach(booking => {
            $('.past-bookings').append(`<tr>
            <td>Date of Stay: ${booking.date.slice(5, 10)}</td>
            <td>Room Number: ${booking.roomNumber}</td>
            </tr>`)
        })
    },

    showAvailableRoomsByType() {
        $('.new-booking__button').hide()
        $('.single-room').show()
        $('.suite').show()
        $('.junior-suite').show()
        $('.residential-suite').show()
    },

    showRooms(roomType) {
        roomType.forEach(room => {
            $('.available-rooms-by-type').append(`<tr>
            <td>Room Number: ${room.number}</td>
            <td>Bed Size: ${room.bedSize}</td>
            <td>Number of Beds: ${room.numBeds}</td>
            <td>Cost: $${room.costPerNight}</td>
            </tr>`)
        });
    },

    showBestBookingDate(date) {
        $('.best-booking-date').text(`Ophelias Most Popular Booking Date: ${date.slice(5, 10)}`)
    },

    showWorstBookingDate(date) {
        $('.worst-booking-date').text(`Ophelias Most Available Date for Booking: ${date.slice(5, 10)}`)
    }

}

export default domUpdates;