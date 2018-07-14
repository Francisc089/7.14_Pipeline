const expect = require('chai').expect;
const pipelineSync = require('../pipeline');

describe('pipeline', () => {
    it('function exists', () => {
        expect(pipelineSync).to.be.ok;
    });
    it('splits a string', () => {
        //expect(pipelineSync).to.be.ok;
        expect(pipelineSync('set 1 | add 1')).to.equal(2);
    });
});

