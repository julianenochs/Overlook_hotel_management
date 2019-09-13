import $ from 'jquery';

let noGuestError = $('.no-guest-found__error')
let addGuestForm = $('.add-guest__form')
let mainPage = $('.main')
const domUpdates = {

    showMain() {
        $('.splash-page').fadeOut();
        addGuestForm.hide();
        mainPage.show();
        noGuestError.hide();
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