import curry from 'lodash-es/curry';
import createAction from './createAction';

export default (function (type, payloadCreator) {
  return curry(createAction(type, payloadCreator), payloadCreator.length);
});