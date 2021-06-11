import chai from 'chai';
const expect = chai.expect;

import { testDataCustomer } from './test-data-customer.js';
import { testDataBooking } from './test-data-booking.js';
import { testDataRoom } from './test-data-room.js';

import Customer from '../src/Customer';


describe('Customer', function () {

    let customer;

    beforeEach('Instantiate customer', () => {
        customer = new Customer(testDataCustomer[0])
    })

    it('Should be an instance of Customer', () => {
        expect(customer).to.be.an.instanceof(Customer);
    });

    it('Should have an id', () => {
        expect(customer.id).to.equal(1);
    });

    it('Should have a name', () => {
        expect(customer.name).to.equal('Leatha Ullrich');
    });

    it('Should have an array that can hold bookings', () => {
        expect(customer.bookings).to.deep.equal([]);
    });

    it('Should have an a total expense counter that starts at 0', () => {
        expect(customer.totalExpense).to.equal(0);
    });

    it('Should be able to add a booking', () => {
        customer.addBooking(testDataBooking[0])
        customer.addBooking(testDataBooking[1])
        expect(customer.bookings).to.deep.equal(
            [
                {
                    "id": "5fwrgu4i7k55hl6t8",
                    "userID": 1,
                    "date": "2020/02/05",
                    "roomNumber": 12,
                    "roomServiceCharges": []
                },
                {
                    "id": "5fwrgu4i7k55hl6x8",
                    "userID": 1,
                    "date": "2020/01/11",
                    "roomNumber": 20,
                    "roomServiceCharges": []
                }
            ]
        );
    });

    it('Should not add a booking if the userID does not match', () => {
        customer.addBooking(testDataBooking[3])
        expect(customer.bookings).to.deep.equal([]);
    });

    it('Should return the total amount paid for all rooms', () => {
        customer.addBooking(testDataBooking[0])
        customer.addBooking(testDataBooking[1])
        customer.addBooking(testDataBooking[2])
        customer.getExpense(testDataRoom)
        expect(customer.totalExpense).to.equal(866.35);
    });
})