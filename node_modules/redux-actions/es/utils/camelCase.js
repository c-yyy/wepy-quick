import camelCase from 'lodash-es/camelCase';

var namespacer = '/';

export default (function (type) {
  return type.indexOf(namespacer) === -1 ? camelCase(type) : type.split(namespacer).map(camelCase).join(namespacer);
});