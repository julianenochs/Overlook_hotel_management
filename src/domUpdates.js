import $ from 'jquery';

const domUpdates = {

// 
    showMain(today) {
        $('.splash-page').fadeOut();
        $('.add-guest__form').hide();
        $('.main').show();
        $('.no-guest-found__error').hide();
        $('.todays-date').text(today);
        $('.new-booking').show();
        $('.single-room__button').hide()
        $('.suite__button').hide()
        $('.junior-suite__button').hide()
        $('.residential-suite__button').hide()
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
            $('.guest-orders-by-date').append(`
            <th>Order Date</th>
            <th>Total Cost</th>
            <tr>
            <td>${order.date}</td>
            </tr><tr>
            <td>${order.totalCost}</td>
            </tr>`)
        })
    },

    showCustomerOrderTotal(name, total) {
        $('.guest-orders-total').text(`${name}'s Total Room Service Charges: $${total}`)
    },

    updateGuestName(guest) {
        $('.guest-name').text(`Showing Information for ${guest}.`)
    },

    showCustomerBookingHistory(guest, bookingHistory) {
        $('.guest-booking-name').text(`${guest}'s Previous Stays.`)
        $('.past-bookings').append(`<tr>
        <td>Date of Stay</td>
        <td>Room Number</td>
        </tr>`)
        bookingHistory.forEach(booking => {
            $('.past-bookings').append(`<tr>
            <td>${booking.date.slice(5, 10)}</td>
            <td>${booking.roomNumber}</td>
            </tr>`)
        })
    },

    showAvailableRoomsByType() {
        $('.new-booking__button').hide()
        $('.single-room__button').show()
        $('.suite__button').show()
        $('.junior-suite__button').show()
        $('.residential-suite__button').show()
    },

    showRooms(className, roomType, hiddenTables) {
        $(`.${className}`).append(`<tr>
        <td>Room Number</td>
        <td>Bed Size</td>
        <td>Number of Beds</td>
        <td>Comes with Bidet</td>
        <td>Cost</td>
        </tr>
        `)
        roomType.forEach(room => {
            let bookCounter = 0
            $(`.${className}`).append(`<tr>
            <td>${room.number}</td>
            <td>${room.bedSize}</td>
            <td>${room.numBeds}</td>
            <td>${room.bidet ? 'Yes' : 'No'}</td>
            <td>$${room.costPerNight}</td>
            <td><button class='book book-${bookCounter++}'>Book</button></td>
            </tr>`)
        });
        // -- code for hiding and showing only clicked on room types
        hiddenTables.forEach(table => {
            $(`.${className}`).show()
            $(`.${table}`).hide()
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