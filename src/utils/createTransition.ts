import { Positions } from "./toValidate";

interface Props {
  width: number;
  position: Positions | string;
}

const createTransition = ({ width, position }: Props) => {
  let x = 0;
  let y = 0;

  if (position === "top") (x = 0), (y = -width);
  if (position === "bottom") (x = 0), (y = width);
  if (position === "right") (x = width), (y = 0);
  if (position === "left") (x = -width), (y = 0);

  const styles = `translate(${x}px,${y}px)`;
  return styles;
};

export { createTransition };
