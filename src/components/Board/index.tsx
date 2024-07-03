import { generateSequence } from "../../utils/generateSequence";
import { Box, BoxVoid } from "../Box";
import { Container } from "./styles";

const Board = () => {
  const sequence = generateSequence(24);
  return (
    <Container>
      {sequence.map((item, i) => {
        if (item !== 0) return <Box item={item} id={i} />;
        if (item === 0) return <BoxVoid />;
      })}
    </Container>
  );
};

export { Board };
