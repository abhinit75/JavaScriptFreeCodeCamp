const algorithms = require('./Basicalgorithm.js');
const assert = require('assert');

it('correctly converts 32 C to F', () => {
    assert.equal(algorithms.convertToF(32), 89.6);
})
