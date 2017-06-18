import $ from 'jquery'
import guests from './GuestArray.js';
import {add} from './GuestArray.js';

$(document).ready(function() {
  const newGuest = $('.new-guest')
      , addGuest = $('.add-guest')
      , guestList = $('.guest-list');

  function getGuests() {
    guestList.empty();
    guests.forEach(function(guest) {
      guestList.append(`<li>${guest}</li>`);
    })
  }
  getGuests();

  addGuest.click(function() {
    add(newGuest.val());
    // guestList.append(`<li>${newGuest.val()}</li>`);
    newGuest.val('');
    getGuests();
  })

})
