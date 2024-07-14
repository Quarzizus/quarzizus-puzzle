import styled from "styled-components";
import { wine } from "../../styles/variables";

const BoxComponent = styled.div`
  /* background-color: ${wine}; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${wine};
  cursor: pointer;
  aspect-ratio: 1/1;
  z-index: 999;
`;
const BoxVoidComponent = styled.div`
  background-color: ${wine};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  aspect-ratio: 1/1;
`;

export { BoxComponent, BoxVoidComponent };
