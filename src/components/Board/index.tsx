import { Box, BoxVoid } from "../Box";
import { Container } from "./styles";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Board = () => {
  const [state] = useContext(AppContext);

  return (
    <Container>
      {state.list.map(({ id, value }) => {
        if (value !== 0)
          return <Box key={id} value={value} id={id} list={state.list} />;
        if (value === 0) return <BoxVoid key={id} />;
      })}
    </Container>
  );
};

export { Board };
