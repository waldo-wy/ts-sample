function getDefaultValue(key, emphasis?) {
  let ret: string;
  if (key === 'name') {
    ret = 'GuangWong';
  } else if (key === 'gender') {
    ret = 'Man';
  } else if (key === 'age') {
    // switch.ts(8,5): error TS2322: Type 'number' is not assignable to type 'string'.
   // ret = 23;
      ret = '23';
  } else {
    throw new Error('Unkown key ' + key);
  }
  if (emphasis) {
    ret = ret.toUpperCase();
  }
  return ret;
}

getDefaultValue('name'); // GuangWong
getDefaultValue('gender', true) // MAN
getDefaultValue('age', true) // Error: toUpperCase is not a function
