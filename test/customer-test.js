import chai from 'chai';
const expect = chai.expect;

import { testDataCustomer } from './test-data-customer.js';
import { testDataBooking } from './test-data-booking.js';
import { testDataRoom } from './test-data-room.js';
import Customer from '../src/customer';


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
        customer.addBooking(testDataBooking)
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
                },
                {
                    "id": "5fwrgu4i7k55hl727",
                    "userID": 1,
                    "date": "2020/01/20",
                    "roomNumber": 22,
                    "roomServiceCharges": []
                },
            ]
        );
    });


    it('Should return the total amount paid for all rooms', () => {
        customer.addBooking(testDataBooking)
        customer.getExpense(testDataRoom)
        expect(customer.totalExpense).to.equal(866.35);
    });

    it('Should sort bookings by date', () => {
        customer.addBooking(testDataBooking)
        customer.sortBookings()
        expect(customer.bookings).to.deep.equal([
            {
                "id": "5fwrgu4i7k55hl6x8",
                "userID": 1,
                "date": "2020/01/11",
                "roomNumber": 20,
                "roomServiceCharges": []
            },
            {
                "id": "5fwrgu4i7k55hl727",
                "userID": 1,
                "date": "2020/01/20",
                "roomNumber": 22,
                "roomServiceCharges": []
            },
            {
                "id": "5fwrgu4i7k55hl6t8",
                "userID": 1,
                "date": "2020/02/05",
                "roomNumber": 12,
                "roomServiceCharges": []
            }
        ]);
    });

    it.skip('Should return past trips', () => {
        let today = "2020/01/17"
        customer.addBooking(testDataBooking)
        customer.returnPastTrips(today)
        expect(customer.returnPastTrips()).to.deep.equal([
            {
                id: '5fwrgu4i7k55hl6x8',
                userID: 1,
                date: '2020/01/11',
                roomNumber: 20,
                roomServiceCharges: []
            }
        ]);
    });

    it.skip('Should return future trips', () => {
        let today = "2020/01/17"
        customer.addBooking(testDataBooking)
        customer.returnFutureTrips(today)
        expect(customer.returnFutureTrips()).to.deep.equal([
            {
                id: "5fwrgu4i7k55hl6t8",
                userID: 1,
                date: "2020/02/05",
                roomNumber: 12,
                roomServiceCharges: []
            },
            {
                id: "5fwrgu4i7k55hl727",
                userID: 1,
                date: "2020/01/20",
                roomNumber: 22,
                roomServiceCharges: []
            }
        ]);
    });
})