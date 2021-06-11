import chai from 'chai';
const expect = chai.expect;
import { testDataCustomer } from './test-data-customer.js';
import Customer from '../src/Customer';
// import Booking from '../src/classes/Booking';


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
})