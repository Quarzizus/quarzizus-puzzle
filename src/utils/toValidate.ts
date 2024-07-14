import { BoxType } from "../components/Box/types";

interface Props {
  list: BoxType[];
  boxValue: number;
}

enum Positions {
  top = "top",
  right = "right",
  bottom = "bottom",
  left = "left",
}

interface ToValidate {
  isValidate: boolean;
  position: Positions;
  index: number;
  indexVoid: number;
}

const toValidate = ({ list, boxValue }: Props): ToValidate => {
  const index = list.findIndex((box) => box.value === boxValue);
  const indexVoid = list.findIndex((box) => box.value === 0);
  const results: ToValidate = {
    isValidate: false,
    position: Positions.top,
    index,
    indexVoid,
  };
  if (index - 1 === indexVoid) {
    results.isValidate = true;
    results.position = Positions.left;
    index % 5 === 0 && (results.isValidate = false);
  }
  if (index + 1 === indexVoid) {
    results.isValidate = true;
    results.position = Positions.right;
    (index + 1) % 5 === 0 && (results.isValidate = false);
  }
  if (index - 5 === indexVoid)
    (results.isValidate = true), (results.position = Positions.top);
  if (index + 5 === indexVoid)
    (results.isValidate = true), (results.position = Positions.bottom);

  return results;
};

export { toValidate };
export type { Positions };
