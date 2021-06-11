import chai from 'chai';
const expect = chai.expect;
import { testDataCustomer } from '../src/data/test-data-customer.js';
import Customer from '../src/classes/Customer';


describe('Customer', function () {

    let customer;

    beforeEach('Instantiate customer', () => {
        customer = new Customer(testDataCustomer[0])
    })

    it('Should be an instance of Customer', () => {
        expect(customer).to.be.an.instanceof(Customer);
    });

    it('Should have a name', () => {
        expect(customer.name).to.equal('Leatha Ullrich');
    });

    it('Should have an id', () => {
        expect(customer.id).to.equal(1);
    });

