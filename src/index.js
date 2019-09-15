import $ from 'jquery';
import './css/base.scss';
import domUpdates from '../src/domUpdates';
import Manager from '../src/Manager';
import Customer from './Customer';
import Orders from './RoomServices';
import Rooms from './Rooms';

let users = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(response => response.json());

let rooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json());

let bookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json());

let roomServices = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
    .then(response => response.json());

let allData = {'users': [], 'rooms': [], 'bookings': [], 'roomServices': []}
Promise.all([users, rooms, bookings, roomServices])
    .then(function(values) {
        allData['users'] = values[0].users;
        allData['rooms'] = values[1].rooms;
        allData['bookings'] = values[2].bookings;
        allData['roomServices'] = values[3].roomServices;
        return allData
    }).then(()=>(handlePageLoad()));

let manager, customer, roomInfo, orders, moment, today;
function handlePageLoad() {
    manager = new Manager(allData);
    customer = new Customer(allData);
    roomInfo = new Rooms(allData);
    orders = new Orders(allData);
    moment = require('moment');
    today = moment().format('YYYY/MM/DD');
    orders.getDailyOrders(today);
    domUpdates.showAvailableRoomsToday(roomInfo.getAvailableRooms(today));
    domUpdates.showTodaysRevenue(roomInfo.todaysTotalRevenue(today));
}

$(document).ready(() => {
    $('.main').hide();

    $('ul.tabs li').click(function() {
        var tabId = $(this).attr('data-tab')
        $('ul.tabs li').removeClass('active-tab');
        $('.tab-content').removeClass('active-tab');
        $(this).addClass('active-tab');
        $(`#${tabId}`).addClass('active-tab');
    });

    $('.splash-button').click(function() {
        domUpdates.showMain(today);
    });

    $('.guest-search__button').click(function(e) {
        e.preventDefault();
        let name = $('.guest-search').val()
        let searchedGuest = manager.searchGuest(name);
        if (searchedGuest === undefined) {
            domUpdates.noGuestFoundError();
        } else {
            domUpdates.showGuestInfo(searchedGuest[0].name)
            updateInfoForSpecifiedCustomer();
        }
    });

    $('.add-guest__button').click(function() {
        domUpdates.showGuestSubmission();
    });

    $('.submit-new-guest__button').click(function() {
        let newGuest = $('.add-guest').val()
        manager.addGuest(newGuest);
        domUpdates.showGuestInfo(newGuest);
    });

    $('.orders-by-date__button').on('click', getOrdersByDate) 
    function getOrdersByDate(id) {
        // e.preventDefault();
        let selectedDate = $('.orders-by-date').val();
        if (id) {
            orders.getOrdersByCustomer(id)
        } else {
            orders.getDailyOrders(selectedDate);
        }
    }

    function updateInfoForSpecifiedCustomer() {
        let customerId = manager.currentGuest[0].id
        domUpdates.updateOrdersTab(manager.currentGuest[0].name)
        getOrdersByDate(customerId)
        getCustomerOrderByDate($('.orders-by-date').val())
    }
});