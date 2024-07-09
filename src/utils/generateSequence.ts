interface ItemType {
  id: number;
  item: number;
}

const generateSequence = (length: number) => {
  const numberRandom = Math.floor(Math.random() * (length - 1 + 1)) + 1;
  const sequence: number[] = Array.from({ length: length }).flatMap(
    (_item, i) => {
      if (i === numberRandom) return [0, i + 1];
      return i + 1;
    }
  );
  const sequenceFormated: ItemType[] = sequence.map((item) => {
    return { id: item, item: item };
  });
  const sequenceRandom = sequenceFormated.sort(() => Math.random() - 0.5);
  return sequenceRandom;
};

export { generateSequence };
// [
//   { id: 1, item: "shrek" },
//   { id: 2, item: "fiona" },
// ]
