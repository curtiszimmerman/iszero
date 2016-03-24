
var isZero = require('./');
var test = require('tape');

test('is zero', function(t) {
	t.ok(isZero(0));
	t.notOk(isZero(1));
	
	t.end();
});
