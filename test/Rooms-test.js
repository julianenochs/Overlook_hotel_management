import chai from 'chai';
import Rooms from '../src/Rooms';
import RoomsData from '../sampleData/rooms';
import BookingsData from '../sampleData/bookings'
const expect = chai.expect;

let rooms
beforeEach(() => {
    // console.log(RoomsData, BookingsData)
    rooms = new Rooms(RoomsData, BookingsData);
});

describe('Rooms', () => {
    it('should show the total amount of rooms available for today', () => {
        expect(rooms.getAvailableRoomsToday('2019/10/18')).to.eql('')
    });

    it('should get the bookings for a given date', () => {
        expect(rooms.getDailyBookings('2019/10/19')).to.eql([{
            userID: 4,
            date: '2019/10/19',
            roomNumber: 5
        }]);
    });

    it('should get the total revenue for today', () => {
        expect(rooms.todaysTotalRevenue()).to.eql('')
    });
});