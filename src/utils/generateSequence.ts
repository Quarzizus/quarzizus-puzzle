const generateSequence = (length: number) => {
  const numberRandom = Math.floor(Math.random() * (length - 1 + 1)) + 1;
  const sequence = Array.from({ length: length }).flatMap((_item, i) => {
    if (i === numberRandom) return [0, i + 1];
    return i + 1;
  });
  return sequence;
};

export { generateSequence };
