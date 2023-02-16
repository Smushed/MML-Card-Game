const doesHaveField = (card: any, value: string): boolean => {
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

export { doesHaveField, checkAndReturnVal, copyPropertyValues };
