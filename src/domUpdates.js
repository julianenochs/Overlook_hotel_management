import $ from 'jquery';

const domUpdates = {

    showMain(today) {
        $('.splash-page').fadeOut();
        $('.add-guest__form').hide();
        $('.main').show();
        $('.no-guest-found__error').hide();
        $('.todays-date').text(today)
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
        $('.guest-name').text(newGuest);
    },

    showDailyRoomServiceOrders(dailyOrders) {
        dailyOrders.forEach(order => {
            $('.guest-orders-by-date').append(`<tr>
            <td> ${order.date}</td>
            <td>$${order.totalCost}</td>
            </tr>`)
        });
        // grab values from dailyOrders and put into a p tag or list
    },

    showNoOrderData() {
        $('#daily-room-services').text('There are no orders yet for today.')
    },

    showOrdersByDate() {
        $('.guest-orders-by-date').text()
    }

}

export default domUpdates;