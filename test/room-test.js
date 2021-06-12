import chai from 'chai';
const expect = chai.expect;


import { testDataRoom } from './test-data-room.js';
import Room from '../src/room';


describe('room', function () {

    let room;

    beforeEach('Instantiate room', () => {
        room = new Room(testDataRoom[0])
    })

    it('1. Should be an instance of room', () => {
        expect(room).to.be.an.instanceof(Room);
    });

    it('2. Should have a number', () => {
        expect(room.number).to.equal(12);
    });

    it('3. Should be a type of room', () => {
        expect(room.roomType).to.equal("single room");
    });

    it('4. Should have or not have a bidet', () => {
        expect(room.bidet).to.equal(false);
    });

    it('5. Should have a size of bed', () => {
        expect(room.bedSize).to.equal("twin");
    });

    it('6. Shouldhave a number of beds', () => {
        expect(room.numBeds).to.equal(2);
    });

    it('7. Should be have a nightly cost', () => {
        expect(room.costPerNight).to.equal(172.09);
    });
  
});
