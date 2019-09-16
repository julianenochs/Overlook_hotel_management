import chai from 'chai';
import Rooms from '../src/Rooms';
import allData from '../sampleData/allData'
const expect = chai.expect;

let rooms
beforeEach(() => {
    rooms = new Rooms(allData);
});

describe('Rooms', () => {
    it('should get the room numbers of the available rooms today', () => {
        expect(rooms.getAvailableRooms('2019/10/18')).to.eql([5, 35, 41, 13, 6])
    });

    it('should get the bookings for a given date', () => {
        expect(rooms.getDailyBookings('2019/10/19')).to.eql([{
            userID: 4,
            date: '2019/10/19',
            roomNumber: 5
        }]);
    });

    it('should get the total revenue for today', () => {
        expect(rooms.todaysTotalRevenue('2019/10/19')).to.eql(246.65)
    });

    it('should get the date with the most bookings', () => {
        expect(rooms.getDateWithMostBookings()).to.eql('2019/10/19')
    });

    it('should be able to the get number of available rooms tonight', () => {
        rooms.getAvailableRooms('2019/10/18')
        expect(rooms.getNumberOfAvailableRooms()).to.eql(5)
    });

    it('should be get the available rooms by type', () => {
        rooms.getAvailableRooms('2019/10/18')
        expect(rooms.availableRoomByType('junior suite')).to.eql([
            {
                number: 4,
                roomType: 'junior suite',
                bidet: false,
                bedSize: 'full',
                numBeds: 1,
                costPerNight: 177.03
            },
            {
                number: 5,
                roomType: 'junior suite',
                bidet: false,
                bedSize: 'king',
                numBeds: 2,
                costPerNight: 246.65
            }
        ])
    });

    it.skip('should be get the available rooms by type as a menu', () => {
        rooms.getAvailableRooms('2019/10/18')
        expect(rooms.availableRoomMenu()).to.eql(['junior suite'])
    });

    it('should get the percentage of rooms occupied for today', () => {
        rooms.getAvailableRooms('2019/10/18');
        expect(rooms.getPercentageOfRoomsOccupied()).to.eql('0.25');
    });

    it('should get a customers booking history', () => {
        expect(rooms.getCustomerBookingHistory(9)).to.eql([{
            userID: 9,
            date: '2019/09/01',
            roomNumber: 41
        }]);
    });
});