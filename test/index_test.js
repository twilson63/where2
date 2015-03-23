var test = require('tap').test;
var w2 = require('../');

test('Happy Path', function(t){
  t.equals(
    w2({foo: 'bar'}),
    "foo = 'bar'"
  );
  t.equals(
    w2({ foo: 'bar', beep: { $lt: 'boop'}}),
    "foo = 'bar' AND beep < 'boop'"
  )
  t.end();
});
