import $ from 'jquery';

const domUpdates = {

    showMain(today) {
        $('.splash-page').fadeOut();
        $('.add-guest__form').hide();
        $('.main').show();
        $('.no-guest-found__error').hide();
        $('.todays-date').text(today)
    },

    showAvailableRoomsToday(rooms) {
        $('.rooms-available-today').text(`Number of Rooms Available Tonight: ${rooms}`)
    },

    showTodaysRevenue(total) {
        $('.revenue').text(`Todays Total Revenue: $${total}:`)
    },

    showGuestSubmission() {
        $('.add-guest__form').show();
        $('.add-guest__button').hide();
        $('.guest-search__form').fadeOut();
    },

    noGuestFoundError() {
        $('.no-guest-found__error').show();
    },

    showGuestInfo(newGuest) {
        $('.add-guest__form').hide();
        $('.guest-search__button').hide();
        $('.add-guest__button').hide();
        $('.guest-name').text(newGuest);
    },

    updateOrdersTab(name) {
        $('.guest-orders-info').text(`Orders for ${name}:`);
    },

    showDailyRoomServiceOrders(className, dailyOrders) {
        dailyOrders.forEach(order => {
            $(`.${className}`).append(`<tr>
            <td> ${order.date}</td>
            <td>$${order.totalCost}</td>
            </tr>`)
        });
    },

    showNoOrderData() {
        $('#daily-room-services').text('There are no orders yet for today.')
    },

    showOrdersByDate() {
        $('.guest-orders-by-date').text()
    }

}

export default domUpdates;