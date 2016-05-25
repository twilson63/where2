var test = require('tap').test;
var w2 = require('../');

test('Happy Path', function(t){
  t.equals(
    w2({foo: 'bar'}),
    "foo = 'bar'"
  );
  t.equals(
    w2({foo: 1}),
    "foo = 1"
  );
  t.equals(
    w2({foo: ['bar']}),
    "foo IN ('bar')"
  );
  t.equals(
    w2({foo: ['bar', 'baz']}),
    "foo IN ('bar', 'baz')"
  );
  t.equals(
    w2({ foo: 'bar', beep: { $lt: 'boop'}}),
    "foo = 'bar' AND beep < 'boop'"
  )
  t.equals(
    w2({foo: ['bar', 'baz'], beep: 'boop'}),
    "foo IN ('bar', 'baz') AND beep = 'boop'"
  );
  t.end();
});

test('With single quotes', function(t){
  t.equals(
    w2({foo: "'bar'"}),
    "foo = '''bar'''"
  );
  t.equals(
    w2({foo: ["bar'", "'baz'"]}),
    "foo IN ('bar''', '''baz''')"
  );
  t.end();
});

test('With undefined values', function(t){
  t.equals(
    w2({foo: undefined}),
    "foo = 'undefined'"
  );
  t.end();
});
