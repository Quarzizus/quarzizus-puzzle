import { useRef } from "react";
import { BoxComponent, BoxVoidComponent } from "./styles";
import { BoxType } from "./types";
import { Positions, toValidate } from "../../utils/toValidate";
import { createTransition } from "../../utils/createTransition";
import { ReSort } from "../Board/types";

interface Props extends BoxType {
  handle: ({ index, indexVoid, value }: ReSort) => BoxType[];
  list: BoxType[];
}

const Box = ({ value, handle, list }: Props) => {
  const animationTime = 0.4;
  const ref = useRef<HTMLDivElement>(null);

  const getWidth = (element: HTMLDivElement | null) => {
    const bounding = element?.getBoundingClientRect();
    return bounding?.width || 0;
  };
  const moveBoxVoid = (position: Positions) => {
    const refVoid = document.getElementsByClassName(
      "BoxVoid"
    )[0] as HTMLDivElement;
    const width = getWidth(refVoid);
    const contraryPositions = {
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    };
    const styles = createTransition({
      width,
      position: contraryPositions[position],
    });
    refVoid.style.transform = styles;
    refVoid.style.transition = `${animationTime}s linear`;
  };
  const moveBox = (position: Positions) => {
    const width = getWidth(ref?.current);
    const styles = createTransition({ width, position });
    if (ref.current?.style) {
      ref.current.style.transform = styles;
      ref.current.style.transition = `${animationTime}s linear`;
    }
  };
  const removeStyles = () => {
    const refVoid = document.getElementsByClassName(
      "BoxVoid"
    )[0] as HTMLDivElement;
    if (ref.current?.style) {
      ref.current.style.transform = "";
      refVoid.style.transform = "";
      ref.current.style.transition = "";
      refVoid.style.transition = "";
    }
  };
  const handleBox = async () => {
    const { isValidate, position, index, indexVoid } = toValidate({
      list,
      boxValue: value,
    });
    if (!isValidate) return;

    await new Promise((resolve) => {
      moveBox(position);
      moveBoxVoid(position);

      resolve(
        setTimeout(() => {
          removeStyles();
          handle({ index, indexVoid, value });
        }, animationTime * 1000)
      );
    });
  };

  return (
    <BoxComponent ref={ref} onClick={() => handleBox()}>
      {value}
    </BoxComponent>
  );
};

const BoxVoid = () => {
  return <BoxVoidComponent className="BoxVoid"></BoxVoidComponent>;
};

export { Box, BoxVoid };
