import isPlainObject from 'lodash-es/isPlainObject';
import isMap from 'lodash-es/isMap';
import hasGeneratorInterface from './hasGeneratorInterface';
import flattenWhenNode from './flattenWhenNode';

export default flattenWhenNode(function (node) {
  return (isPlainObject(node) || isMap(node)) && !hasGeneratorInterface(node);
});