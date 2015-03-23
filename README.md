# Where2 

A simple lib that converts a object clause into a sql where clause:

ex:

```
var result = where2({foo: 'bar', baz: { $gt: 'bam'}});
#=> "foo = 'bar' AND baz > 'bam'"
```

## Install

``` sh
npm install where2
```

## Usage

``` js
var where2 = require('where2');

var result = where2({foo: { $lte: 'bar'}})
```


