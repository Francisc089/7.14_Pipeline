const expect = require('chai').expect;
const obj = require('../pipeline');
const pipelineSync = obj.pipelineSync;
const pipelineAsync = obj.pipelineAsync;
const file = require('../foo.txt');
const path = require('path');

describe('Sync Pipeline', () => {
    it('function exists', () => {
        expect(pipelineSync).to.be.ok;
    });
    it('splits a string and adds', () => {
        //expect(pipelineSync).to.be.ok;
        expect(pipelineSync('set 1 | add 1')).to.equal(2);
    });
    it('does it all', () => {
        expect(pipelineSync('set 1 | add 1 | mult 21')).to.equal(42);
    })
});

describe('Async Pipeline', () => {
    it('function exists', () => {
        expect(pipelineAsync).to.be.ok;
    });
    it('adds from file', () => {
        const fileName = path.join(__dirname, "../foo.txt")
        expect(pipelineAsync('set 1 | addFromFile ../foo.txt')).to.equal(2)
    })
});
