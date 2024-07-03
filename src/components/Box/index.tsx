import { BoxComponent, BoxVoidComponent } from "./styles";

interface Props {
  id: number;
  item: number;
}

const Box = ({ item }: Props) => {
  return <BoxComponent>{item}</BoxComponent>;
};

const BoxVoid = () => {
  return <BoxVoidComponent></BoxVoidComponent>;
};

export { Box, BoxVoid };
