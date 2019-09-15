import chai from 'chai';
import Rooms from '../src/Rooms';
import allData from '../sampleData/allData'
const expect = chai.expect;

let rooms
beforeEach(() => {
    // console.log(BookingsData)
    rooms = new Rooms(allData);
});

describe('Rooms', () => {
    it('should get the room numbers of the available rooms today', () => {
        expect(rooms.getAvailableRooms('2019/10/18')).to.eql(5)
    });

    it('should get the bookings for a given date', () => {
        expect(rooms.getDailyBookings('2019/10/19')).to.eql([{
            userID: 4,
            date: '2019/10/19',
            roomNumber: 5
        }]);
    });

    it('should get the total revenue for today', () => {
        // rooms.getDailyBookings('2019/10/19');
        expect(rooms.todaysTotalRevenue('2019/10/19')).to.eql(246.65)
    });

    it.skip('should get the date with the most bookings', () => {
        expect(rooms.getDateWithMostBookings()).to.eql('')
    })
});