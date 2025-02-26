import { Option } from "./Option";

export const keepMap = <A, B>(
  array: Array<A>,
  func: (item: A) => NonNullable<B> | undefined | null,
): Array<NonNullable<B>> => {
  const result: Array<NonNullable<B>> = [];
  array.forEach((item) => {
    const mapped = func(item);
    if (mapped != null) {
      result.push(mapped);
    }
  });
  return result;
};

export const getBy = <A>(
  array: Array<A>,
  func: (item: A) => boolean,
): Option<A> => {
  let index = -1;
  while (++index < array.length) {
    const item = array[index] as A;
    if (func(item)) {
      return Option.Some(item);
    }
  }
  return Option.None();
};

export const getIndexBy = <A>(
  array: Array<A>,
  func: (item: A) => boolean,
): Option<number> => {
  let index = -1;
  while (++index < array.length) {
    const item = array[index] as A;
    if (func(item)) {
      return Option.Some(index);
    }
  }
  return Option.None();
};

const defaultCompare = <A>(a: A, b: A) => {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
};

export const binarySearchBy = <A>(
  sortedArray: Array<A>,
  key: A,
  compare = defaultCompare,
) => {
  if (sortedArray.length === 0) {
    return -1;
  }
  let low = 0;
  let high = sortedArray.length - 1;
  while (true) {
    let mid = (low + (high - low) / 2) | 0;
    if (mid === low || mid === high) {
      return high;
    }
    let midItem = sortedArray[mid] as A;
    let diff = compare(key, midItem);
    if (diff === 0) {
      return mid;
    }
    if (diff > 0) {
      low = mid;
      continue;
    }
    if (diff < 0) {
      high = mid;
      continue;
    }
  }
};
