import $ from 'jquery';
import './css/base.scss';
import domUpdates from '../src/domUpdates';
import Manager from '../src/Manager';
import Orders from './RoomServices';
import Rooms from './Rooms';

// --Fetch All Data--
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
        return allData;
    }).then(()=>(handlePageLoad()));

// --On Page Load--
let manager, roomInfo, orders, moment, today, headerDate;
    function handlePageLoad() {
        manager = new Manager(allData);
        roomInfo = new Rooms(allData);
        orders = new Orders(allData);
        moment = require('moment');
        today = moment().format('YYYY/MM/DD');
        headerDate = moment().format('L')
        handleOrdersTab();
        handleRoomsTab();
    }   

// --Show Splash Page--
    $('.main').hide();

// -- Tabs --
    $('ul.tabs li').click(function() {
        var tabId = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('active-tab');
        $('.tab-content').removeClass('active-tab');
        $(this).addClass('active-tab');
        $(`#${tabId}`).addClass('active-tab');
    });

// --Hide Splash Page--
    $('.splash-button').click(function() {
        domUpdates.showMain(headerDate);
    });

// --Search For Guest--
    $('.guest-search__button').click(function(e) {
        e.preventDefault();
        let name = $('.guest-search').val();
        let searchedGuest = manager.searchGuest(name);
        if (searchedGuest[0] === undefined) {
            domUpdates.noGuestFoundError();
            searchedGuest.pop()
        } else {
            domUpdates.showGuestInfo(searchedGuest[0].name);
            domUpdates.updateGuestName(searchedGuest[0].name)
            updateOrderInfoForSpecifiedCustomer();
            updateRoomInfoForSpecifiedCustomer();
        }
    });

// --Add A New Guest--
    $('.add-guest__button').click(function() {
        domUpdates.showGuestSubmission();
    });
    
    $('.submit-new-guest__button').click(function() {
        let newGuest = $('.add-guest').val();
        manager.addGuest(newGuest);
        domUpdates.showGuestInfo(newGuest);
        domUpdates.showNewGuestMessages(newGuest);
    });

// --Update Orders Tab--
    $('.orders-by-date__button').on('click', function(e) {
        let guest = manager.currentGuest[0];
        e.preventDefault();
        let selectedDate = $('.orders-by-date').val();
        let formattedDate = selectedDate.replace(/-/gi, "/");
        if (guest) {
            orders.getDailyOrders(formattedDate)
            updateCustomerOrderInfoByDate(guest.id, formattedDate);
        } else {
            orders.getDailyOrders(formattedDate);
        }
    });

    function updateOrderInfoForSpecifiedCustomer() {
        let guest = manager.currentGuest[0];
        orders.getCustomerOrderHistory(guest.id);
        domUpdates.showCustomerOrderTotal(guest.name, orders.getCustomerOrderTotal(guest.id))
        domUpdates.updateOrdersTab(guest.name);
    }

    function updateCustomerOrderInfoByDate() {
        let guest = manager.currentGuest[0];
        domUpdates.showOrderHistoryByDate(orders.getCustomerOrderByDate(guest.id, $('.orders-by-date').val()))
    }

    function updateRoomInfoForSpecifiedCustomer() {
        let guest = manager.currentGuest[0];
        domUpdates.showCustomerBookingHistory(guest.name, roomInfo.getCustomerBookingHistory(guest.id));
    }

    function handleOrdersTab() {
        orders.getDailyOrders(today);
    }

// --Update Rooms Tab--
    function handleRoomsTab() {
        roomInfo.getAvailableRooms(today);
        domUpdates.showAvailableRoomsToday(roomInfo.getNumberOfAvailableRooms(today));
        domUpdates.showTodaysRevenue(roomInfo.todaysTotalRevenue(today));
        roomInfo.availableRoomByType();
        domUpdates.showPercentageOfRoomsOccupied(roomInfo.getPercentageOfRoomsOccupied(today));
        domUpdates.showBestBookingDate(roomInfo.getDateWithMostBookings());
        domUpdates.showWorstBookingDate(roomInfo.getDateWithLeastBookings());
    }

// --New Bookings--
    $('.new-booking__button').on('click', showRoomButtons)
    function showRoomButtons() {
        domUpdates.showAvailableRoomsByType(roomInfo.availableRoomMenu());
    }

    $('.single-room__button').click(function() {
        // for showRooms() I added a 3rd argument, an array of the other rooms classes and used the commented
        // out forEach on line 150 of domUpdates (added the parameter hiddenTables too)
        // She no workee
        domUpdates.showRooms('single', roomInfo.availableRoomByType('single room'), ['suite', 'juinor-suite', 'residential-suite'])
    });

    $('.suite__button').click(function () {
        domUpdates.showRooms('suite', roomInfo.availableRoomByType('suite'), ['single', 'juinor-suite', 'residential-suite'])
    });

    $('.junior-suite__button').click(function () {
        domUpdates.showRooms('junior-suite', roomInfo.availableRoomByType('junior suite'), ['suite', 'single', 'residential-suite'])
    });

    $('.residential-suite__button').click(function () {
        domUpdates.showRooms('residential-suite', roomInfo.availableRoomByType('residential suite'), ['suite', 'juinor-suite', 'single'])
    });
