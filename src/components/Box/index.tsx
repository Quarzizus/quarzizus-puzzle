import { BoxComponent, BoxVoidComponent } from "./styles";

interface Props {
  id: number;
  item: number;
  handle: (item: number) => void;
}

const Box = ({ item, id, handle }: Props) => {
  return <BoxComponent onClick={() => handle(id)}>{item}</BoxComponent>;
};

const BoxVoid = () => {
  return <BoxVoidComponent></BoxVoidComponent>;
};

export { Box, BoxVoid };
