
export const getRndArray = (min: number, max: number, count: number): number[] => {
  const result: number[] = [];
  for (let i = 0; i < count; i++) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(random);
  }
  return result;
}

export const getRndUniArr = (min: number, max: number, count: number): number[] => {
  const rangeSize = max - min + 1;
  if (count > rangeSize) {
    throw new Error(`Cannot generate ${count} unique numbers between ${min} and ${max}`);
  }

  const allValues: number[] = [];
  for (let i = min; i <= max; i++) {
    allValues.push(i);
  }

  // Shuffle the array
  for (let i = allValues.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allValues[i], allValues[j]] = [allValues[j], allValues[i]];
  }

  return allValues.slice(0, count);
}
