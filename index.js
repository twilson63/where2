var _ = require('underscore');

var template = _.template("<%= key %> <%= op %> '<%= value %>'");
var matchers = { $gt: '>', $gte: '>=', $lt: '<', $lte: '<=', $ne: '!='};

function match(v, k) {
  if (!_.isObject(v)) return template({ key: k, op: '=', value: v });
  var op = _.chain(v).keys().first().value();
  return template({key: k, op: matchers[op], value: v[op]});
}

module.exports = function(where) {
  return _(where).map(match).join(' AND ');
};
