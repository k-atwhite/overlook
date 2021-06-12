import chai from 'chai';
const expect = chai.expect;


import { testDataBooking } from './test-data-booking.js';
import { testDataRoom } from './test-data-room.js';
import Booking from '../src/booking';


describe('Booking', function () {

    let booking;

    beforeEach('Instantiate booking', () => {
        booking = new Booking(testDataBooking[0])
    })

    it('Should be an instance of Booking', () => {
        expect(booking).to.be.an.instanceof(Booking);
    });

    it('Should be have an id', () => {
        expect(booking.id).to.equal.(1);
    });

    it('Should be have a date', () => {
        expect(booking.id).to.equal.("2020/02/05");
    });

    it('Should be have a roomNumber', () => {
        expect(booking.id).to.equal.(12);
    });

    it('Should be have an array of room service charges', () => {
        expect(booking.id).to.deep.equal.([]);
    });

})
