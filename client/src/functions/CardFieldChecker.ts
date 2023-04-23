const doesHaveField = (card: any, value: string): boolean => {
  console.log(value);
  if (card === null) {
    return false;
  }
  return !(card[value] === undefined);
};

const checkAndReturnVal = (check: any, valueToPull: string): string => {
  if (check) {
    return check[valueToPull];
  } else {
    return '';
  }
};

const checkAndReturnNum = (check: any, valueToPull: string): number => {
  if (check) {
    return check[valueToPull];
  } else {
    return 0;
  }
};

function copyPropertyValues<T>(s: T, d: any) {
  for (const k in s) {
    d[k] = s[k];
  }
}

// function copyAllExcept<T>(
//   target: any,
//   source: T,
//   skip: Extract<keyof T, string>[]
// ) {
//   for (const key in source) {
//     if (source[key] != null && !skip.includes(key)) {
//       target[key] = source[key];
//     }
//   }
// }

export {
  doesHaveField,
  checkAndReturnVal,
  checkAndReturnNum,
  copyPropertyValues,
};
