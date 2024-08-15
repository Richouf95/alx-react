import { fromJS } from 'immutable';

export default function accessImmutableObject(obj, arr) {
  return fromJS(obj).getIn(arr, undefined);
}
