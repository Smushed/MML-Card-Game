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

export { doesHaveField, checkAndReturnVal };
