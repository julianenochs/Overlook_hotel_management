import $ from 'jquery';

import './css/base.scss';
import domUpdates from '../src/domUpdates';
import Manager from '../src/Manager';

let users = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(function(response) {
        return response.json
    });
let rooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(function(response) {
        return response.json
    });
let bookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(function(response) {
        return response.json
    });
let roomServices = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
    .then(function(response) {
        return response.json
    });

let allData = {'users': {}, 'rooms': {}, 'bookings': {}, 'roomServices': {}}
Promise.all([users, rooms, bookings, roomServices])
    .then(function(values) {
        allData['users'] = values[0];
        allData['rooms'] = values[1];
        allData['bookings'] = values[2];
        allData['roomServices'] = values[3];
        return allData
    });

$(document).ready(() => {
    $('.main').hide();
    $('.splash-button').click(function() {
        domUpdates.showMain();
    });
    $('.add-guest__button').click(function() {
        domUpdates.showGuestSubmission();
    });
    $('.guest-search__button').click(function() {
        Manager.searchGuest();
    });

});






// // MENU
// let menu = new BloomingMenu({
//     itemsNum: 4
// });

// menu.render();
// menu.props.elements.items.forEach(function (item, index) {
//     item.addEventListener('click', function () {
//         console.log('Item #' + index + 'was clicked')
//     })
// })