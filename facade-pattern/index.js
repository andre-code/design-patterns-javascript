import BookerFacade from './bookerFacade.js';
let flight = {
    departure_datetime: '21/09/2017 09:00',
    return_datetime: '25/09/2017 22:00',
    from: 'New York',
    to: 'London',
};

let train = {
    departure_datetime: '22/09/2017 20:00',
    return_datetime: '25/09/2017 10:00',
    from: 'London',
    to: 'Edinburgh',
};

let hotel = {
    check_in_date: '22/09/2017',
    nights: 1,
    city: 'London',
    hotel_name: 'Four Seasons Hotel',
};

let booking = new BookerFacade('Hotel');
booking.book(hotel);

let booking1 = new BookerFacade('Flight_And_Hotel');
booking1.book({flight, hotel});

let booking2 = new BookerFacade('Train_And_Hotel');
booking2.book({train, hotel});