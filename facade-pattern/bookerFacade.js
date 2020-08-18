import { FlightBooker, HotelBooker, TrainBooker }  from './bookers.js';

export default class BookerFacade {
    reservationType;
    constructor (type) {
        this.reservationType = type;
        this.flight =  new FlightBooker();
        this.hotel =  new HotelBooker();
        this.train =  new TrainBooker();
    }
    book (reservationInfo) {
        switch (this.reservationType) {
            case 'Flight':
                this.flight.book(reservationInfo);
                break;
            case 'Hotel':
                this.hotel.book(reservationInfo);
                break;
            case 'Train':
                this.train.book(reservationInfo);
                break;
            case 'Flight_And_Hotel':
                this.flight.book(reservationInfo.flight);
                this.hotel.book(reservationInfo.hotel);
                break;
            case 'Train_And_Hotel':
                this.train.book(reservationInfo.train);
                this.hotel.book(reservationInfo.hotel);
                break;
            default:
                throw Error('Reservation type is not supported.');
        }
    }
}
