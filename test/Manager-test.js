import chai from 'chai';
import Manager from '../src/Manager';
import allData from '../sampleData/allData';
const expect = chai.expect;

let manager;
beforeEach(() => {
    manager = new Manager(allData);
});

describe('Manager', () => {

    it('should have access to the data', () => {
        expect(manager.data).to.eql(allData);
    });

    it('should be able to search for a guest', () => {
        expect(manager.searchGuest('Chadrick Lowe')).to.eql([{
            id: 2,
            name: 'Chadrick Lowe'
        }]);
    });

    it('should be able to add a guest', () => {
        expect(manager.addGuest('Julian Enochs')).to.eql({
            name: 'Julian Enochs',
            id: 2
        });
    });

});