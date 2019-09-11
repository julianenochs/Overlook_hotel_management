import $ from 'jquery';

const domUpdates = {

    showGuestSubmission() {
        $('.add-guest__form').show();
        $('.guest-search__form').fadeOut();
    }
    
}

export default domUpdates;