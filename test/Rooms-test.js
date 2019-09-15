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
    it('should show the total amount of rooms available for today', () => {
        expect(rooms.getAvailableRoomsToday('2019/10/18')).to.eql([{
                userID: 4,
                date: '2019/10/19',
                roomNumber: 5
            },
            {
                userID: 29,
                date: '2019/10/30',
                roomNumber: 35
            },
            {
                userID: 9,
                date: '2019/09/01',
                roomNumber: 41
            },
            {
                userID: 88,
                date: '2019/08/28',
                roomNumber: 13
            },
            {
                userID: 42,
                date: '2019/10/30',
                roomNumber: 6
            }
        ])
    });

    it('should get the bookings for a given date', () => {
        expect(rooms.getDailyBookings('2019/10/19')).to.eql([{
            userID: 4,
            date: '2019/10/19',
            roomNumber: 5
        }]);
    });

    it('should get the total revenue for today', () => {
        rooms.getDailyBookings('2019/10/19');
        expect(rooms.todaysTotalRevenue()).to.eql(246.65)
    });

    it.skip('should get the date with the most bookings', () => {
        expect(rooms.getDateWithMostBookings()).to.eql('')
    })
});