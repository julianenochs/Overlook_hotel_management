import $ from 'jquery';

import './css/base.scss';
import domUpdates from '../src/domUpdates';
import Manager from '../src/Manager';
import fetch from 'cross-fetch';

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
        allData['users'] = values[0];
        allData['rooms'] = values[1];
        allData['bookings'] = values[2];
        allData['roomServices'] = values[3];
        return allData
    });

let manager = new Manager(allData);
$(document).ready(() => {
    $('.main').hide();

    $('.splash-button').click(function() {
        domUpdates.showMain();
    });
    
    $('.guest-search__button').click(function() {
        let name = $('.guest-search').val()
        let searchedGuest = manager.searchGuest(name);
        if (searchedGuest === undefined) {
            domUpdates.noGuestFoundError();
        }
    });
    
    $('.add-guest__button').click(function() {
        domUpdates.showGuestSubmission();
    });

    $('.sumbit-new-guest__button').click(function() {
        let newGuest = $('.add-guest').val()
        let addedGuest = manager.addGuest(newGuest);
        domUpdates.showGuestInfo();
    })
});