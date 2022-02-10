const hideString = (string: string): string[] => {
  const stringArray = string.split("");
  const num = Math.floor(stringArray.length / 2);
  let index = 2;
  for (let i = 0; i <= num - 1; i = i + 1) {
    if (index + 1 > string.length) {
      break;
    }
    if (stringArray[index] === " ") {
      index = index + 1;
    } else if (index === string.length) {
      return stringArray;
    } else if (index > string.length) {
    }
    stringArray[index] = "_";
    index = index + 2;
  }
  return stringArray;
};

export default hideString;
