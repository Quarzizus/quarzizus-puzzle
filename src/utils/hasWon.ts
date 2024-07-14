import { BoxType } from "../components/Box/types";

const hasWon = (list: BoxType[]) => {
  const validation = list.map((box, i) => {
    if (box.value === +list[i + 1]?.value - 1) return true;
    return false;
  });

  const isWon = validation.slice(0, -2).every((value) => value);
  return isWon;
};

export { hasWon };
