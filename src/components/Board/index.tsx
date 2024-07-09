import { generateSequence } from "../../utils/generateSequence";
import { Box, BoxVoid } from "../Box";
import { Container } from "./styles";
import { useState } from "react";

interface ItemType {
  id: number;
  item: number;
}

const Board = () => {
  const [list, setList] = useState<ItemType[]>(() => generateSequence(24));

  const reSort = (index: number, indexVoid: number, item: number) => {
    const newList: ItemType[] = list.map((e, i) => {
      if (i === index) {
        return { id: 0, item: 0 };
      }
      if (i === indexVoid) {
        return { id: item, item: item };
      }
      return e;
    });

    setList(newList);
  };

  const handle = (item: number) => {
    const index = list.findIndex((value) => value.item === item);
    const indexVoid = list.findIndex((value) => value.item === 0);

    if (
      index - 1 === indexVoid ||
      index + 1 === indexVoid ||
      index + 5 === indexVoid ||
      index - 5 === indexVoid
    ) {
      reSort(index, indexVoid, item);
      return;
    }
  };

  return (
    <Container>
      {list.map(({ id, item }) => {
        if (item !== 0)
          return <Box key={id} item={item} id={id} handle={handle} />;
        if (item === 0) return <BoxVoid key={id} />;
      })}
    </Container>
  );
};

export { Board };
