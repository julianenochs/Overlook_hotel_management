import chai from 'chai';
import Rooms from '../src/Rooms';
import RoomsData from '../sampleData/rooms';
const expect = chai.expect;

let rooms
beforeEach(() => {
    rooms = new Rooms(RoomsData);
});

describe('Rooms', () => {
    it('should show the total amount of rooms available for today', () => {
        
    })
});