import { Map } from 'immutable';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = map.withMutations((mapMutate) => {
  mapMutate.set(2, 'Benjamin');
  mapMutate.set(4, 'Oliver');
});
