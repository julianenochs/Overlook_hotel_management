import chai from 'chai';
import Manager from '../src/Manager';
import UsersData from '../sampleData/users'
const expect = chai.expect;

let manager
beforeEach(() => {
    // console.log(UsersData)
    manager = new Manager(UsersData);
});

describe('Manager', () => {
    it('should be able to search for a guest', () => {
        expect(manager.searchGuest('Chadrick Lowe')).to.eql({
            id: 2,
            name: 'Chadrick Lowe'
        });
    });

    it('should be able to add a guest', () => {
        expect(manager.addGuest('Julian Enochs')).to.eql('Julian Enochs')
    });
});