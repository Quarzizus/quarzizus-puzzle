import { BoxType } from "../components/Box/types";

const generateSequence = (length: number) => {
  const numberRandom = Math.floor(Math.random() * (length - 1 + 1)) + 1;
  const sequence: number[] = Array.from({ length: length }).flatMap(
    (_item, i) => {
      if (i === numberRandom) return [0, i + 1];
      return i + 1;
    }
  );
  const sequenceFormated: BoxType[] = sequence.map((value) => {
    return { id: value, value: value };
  });
  const sequenceRandom = sequenceFormated.sort(() => Math.random() - 0.5);
  return sequenceRandom;
};

export { generateSequence };
