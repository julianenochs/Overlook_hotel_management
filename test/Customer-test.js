import chai from 'chai';
import Customer from '../src/Customer';
import allData from '../sampleData/allData'
const expect = chai.expect;

let customer
beforeEach(() => {
    customer = new Customer(allData)
});

describe('Customer', () => {

    it('should be able to book a specific type of room', () => {
        expect(customer.filterRoomsByType('residential suite')).to.eql([{
            number: 1,
            roomType: 'residential suite',
            bidet: false,
            bedSize: 'twin',
            numBeds: 1,
            costPerNight: 265.03
        }]);
    });

    
});