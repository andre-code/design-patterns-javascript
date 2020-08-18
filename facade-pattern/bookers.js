export class TrainBooker {
    departureDatetime = '';
    returnDateTime = '';
    fromTravel = '';
    toTravel = '';

    book (bookingInfo) {
        this.departureDatetime = bookingInfo.departure_datetime;
        this.returnDateTime = bookingInfo.return_datetime;
        this.fromTravel = bookingInfo.from;
        this.toTravel =  bookingInfo.to;
        console.log(`Booked Train from ${this.fromTravel} to ${this.toTravel}`);
    }
}
export class FlightBooker {
    departureDatetime = '';
    returnDateTime = '';
    fromTravel = '';
    toTravel = '';
    airline = 'Avianca';

    book (bookingInfo) {
        this.departureDatetime = bookingInfo.departure_datetime;
        this.returnDateTime = bookingInfo.return_datetime;
        this.fromTravel = bookingInfo.from;
        this.toTravel =  bookingInfo.to;
        this.airline = bookingInfo.airline;
        console.log(`Booked Flight from ${this.fromTravel} to ${this.toTravel}`);
    }
}

export class HotelBooker {
    checkInDate = '';
    nights = '';
    city = '';
    hotelName = '';

    book (bookingInfo) {
        this.checkInDate = bookingInfo.check_in_date;
        this.nights = bookingInfo.nights;
        this.city = bookingInfo.city;
        this.hotelName =  bookingInfo.hotel_name;
        console.log(`Booked Hotel ${this.hotelName}, ${this.nights} nights`);
    }
}