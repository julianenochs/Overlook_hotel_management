import chai from 'chai';
import Orders from '../src/RoomServices';
import allData from '../sampleData/allData';
import Manager from '../src/Manager'
const expect = chai.expect;

let orders
beforeEach(() => {
    orders = new Orders(allData)
    // manager = new Manager(allData)
});

describe('Room Services', () => {

    it('should get the daily orders', () => {
        // should be a spy
    });

    it('should get all room service orders for a specified customer', () => {
    // should be a spy
    });

    it.skip('should get a specified customers orders by date', () => {
        expect(getCustomerOrderByDate('2019/09/15')).to.eql('')
    });

});