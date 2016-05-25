var _ = require('underscore');

var template = _.template("<%= key %> <%= op %> <%= value %>");
var matchers = { $gt: '>', $gte: '>=', $lt: '<', $lte: '<=', $ne: '!='};

function sqlValue(value) {
  if (_.isNumber(value)) {
    return value;
  } else if (_.isString(value)) {
    return "'" + value.replace(/'/g, "''") + "'";
  } else {
    return "'" + value + "'"; // backwards compatibility for undefined input etc
  }
}

function match(v, k) {
  if (_.isArray(v)) {
    var values = '(' + _.map(v, sqlValue).join(', ') + ')';
    return template({ key: k, op: 'IN', value: values });
  }
  if (!_.isObject(v)) return template({ key: k, op: '=', value: sqlValue(v) });
  var op = _.chain(v).keys().first().value();
  return template({key: k, op: matchers[op], value: sqlValue(v[op])});
}

module.exports = function(where) {
  return _(where).map(match).join(' AND ');
};
