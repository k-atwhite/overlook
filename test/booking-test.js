import chai from 'chai';
const expect = chai.expect;


import { testDataBooking } from './test-data-booking.js';
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
        expect(booking.id).to.equal("5fwrgu4i7k55hl6t8");
    });

    it('Should be have a user id', () => {
        expect(booking.userID).to.equal(1);
    });

    it('Should be have a date', () => {
        expect(booking.date).to.equal("2020/02/05");
    });

    it('Should be have a room number', () => {
        expect(booking.roomNumber).to.equal(12);
    });

    it('Should be have an array of room service charges', () => {
        expect(booking.roomServiceCharges).to.deep.equal([]);
    });

})
