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

    it.skip('should get the daily orders', () => {
        // expect(orders.getDailyOrders('2019/07/29')).to.eql([{
        //     userID: 14,
        //     date: '2019/07/29',
        //     food: 'Rustic Concrete Sandwich',
        //     totalCost: 14.9
        // }])
    });

    it('should get all room service orders for a specified customer', () => {
        // expect(orders.getOrdersByCustomer()).to.eql('')
    })

});