import $ from 'jquery';

let noGuestError = $('.no-guest-found__error')
let addGuestForm = $('.add-guest__form')
let mainPage = $('.main')
var moment = require('moment');
const domUpdates = {

    showMain() {
        $('.splash-page').fadeOut();
        addGuestForm.hide();
        mainPage.show();
        noGuestError.hide();
        $('.todays-date').text(moment().format("MMM Do YY"))
    },

    showGuestSubmission() {
        addGuestForm.show();
        $('.add-guest__button').hide();
        $('.guest-search__form').fadeOut();
    },

    noGuestFoundError() {
        noGuestError.show();
    },

    showGuestInfo(newGuest) {
        addGuestForm.hide();
        $('.guest-name').text(newGuest)
    }
    
}

export default domUpdates;