import { Map } from 'immutable';

const mergeDeeplyElements = (page1, page2) => {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const merged = map1.mergeDeep(map2);
  return merged.toList();
};

export default mergeDeeplyElements;
