import chai from 'chai';
import Customer from '../src/Customer';
import BookingsData from '../sampleData/bookings'
const expect = chai.expect;

let customer
beforeEach(() => {
    customer = new Customer(BookingsData)
});

describe('Customer', () => {

    // it('should have an id', () => {
    //     expect(customer.id).to.equal(1);
    // });
    
    // it('should have a name', () => {
    //     expect(customer.name).to.equal('Matilde Larson')
    // });

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