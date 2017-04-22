// Test 2

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf() existing element', function() {
    it('should return the index when present', function() {
      assert.equal(2, [1,2,3].indexOf(3));
    });
  });
});

