import { generateSequence } from "../../utils/generateSequence";
import { Box, BoxVoid } from "../Box";
import { BoxType } from "../Box/types";
import { Container } from "./styles";
import { useState } from "react";
import { ReSort } from "./types";

const Board = () => {
  const [list, setList] = useState<BoxType[]>(() => generateSequence(24));

  const reSort = ({ index, indexVoid, value }: ReSort) => {
    const newList: BoxType[] = list.map((e, i) => {
      if (i === index) {
        return { id: 0, value: 0 };
      }
      if (i === indexVoid) {
        return { id: value, value: value };
      }
      return e;
    });

    setList(newList);
    return newList;
  };

  return (
    <Container>
      {list.map(({ id, value }) => {
        if (value !== 0)
          return (
            <Box key={id} value={value} id={id} list={list} handle={reSort} />
          );
        if (value === 0) return <BoxVoid key={id} />;
      })}
    </Container>
  );
};

export { Board };
