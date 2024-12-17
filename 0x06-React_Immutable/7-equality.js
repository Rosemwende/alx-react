import { Map } from 'immutable';

export function areMapsEqual(map1, map2) {
  return map1.is(map2);
}
