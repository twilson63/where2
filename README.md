# Where2 

[![build status](https://secure.travis-ci.org/twilson63/where2.png)](http://travis-ci.org/twilson63/where2)

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

## Where Attributes

Key | Description
----|------------
$lt | Less Than
$lte | Less Than or Equal
$gt | Greater Than
$gte | Greater Than or Equal
$ne  | Not Equal To

## JSON Examples

### Where
#### where single equals:

  {"name":"foo2"}
```
name = "foo2"
```
Returns all records where name equals "foo2"

#### where in collection:

  {"name":["foo2", "foo3"]}
```
name IN ("foo2", "foo3")
```
Returns all records where name equals "foo2" or "foo3"

#### where multiple equals:

  {"name":"foo","description":"bar"}
```
name = "foo" AND description = "bar"
```
Returns all records where name equals "foo" and description equals "bar"

#### where less than:

  {"id":{"$lt":"2"}}
```
id < 2
```
Returns all records where id is less than "2"

#### where less than or equal to:

  {"id":{"$lte":"2"}}
```
id <= 2
```
Returns all records where id is less than or equal to "2"

#### where greater than:

  {"id":{"$gt":"2"}}
```
id > 2
```
Returns all records where id is greater than "2"

#### where greater than or equal to:

  {"id":{"$gte":"2"}}
```
id >= 2
```
Returns all records where id is greater than or equal to "2"

#### where not equal to:

  {"name":{"$ne":"bar"}}
```
name != "bar"
```
Returns all records where name is not equal to "bar"

## Collaborators

* Kevin Collins [kevincol54](https://github.com/kevincol54)
* Tom Wilson [twilson63](https://github.com/twilson63)


