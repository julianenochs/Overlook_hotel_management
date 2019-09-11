import chai from 'chai';
import Customer from '../src/Customer';
const expect = chai.expect;

let customer
beforeEach(() => {
    customer = new Customer(1, 'Matilde Larson')
});

describe('Customer', () => {

    it('should have an id', () => {
        expect(customer.id).to.equal(1);
    });
    
    it('should have a name', () => {
        expect(customer.name).to.equal('Matilde Larson')
    });
});