import chai from 'chai';
import Orders from '../src/RoomServices';
import allData from '../sampleData/allData';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

let orders
beforeEach(() => {
    orders = new Orders(allData);
});

describe('Room Services', () => {

    it('should get the daily orders', () => {
        chai.spy.on(orders, ['getDailyOrders'], () => {});
        orders.getDailyOrders();
    });

    it('should get all room service orders for a specified customer', () => {
        chai.spy.on(orders, ['getCustomerOrderHistory'], () => {});
        orders.getCustomerOrderHistory();
    });

    it('should get a specified customers orders by date', () => {
        chai.spy.on(orders, ['getCustomerOrderHistory'], () => {});
        orders.getCustomerOrderHistory(100);
        expect(orders.getCustomerOrderByDate(100, '2019/10/18')).to.eql([{
            userID: 100,
            date: '2019/10/18',
            food: 'Rustic Cotton Sandwich',
            totalCost: 17.33
        }]);
    });

    it('should get a customers total for all room service orders', () => {
        chai.spy.on(orders, ['getCustomerOrderHistory'], () => {});
        orders.getCustomerOrderHistory(14);
        expect(orders.getCustomerOrderTotal(14)).to.eql(14.9);
    });

});