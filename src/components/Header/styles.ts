import styled from "styled-components";
import { wine } from "../../styles/variables";

const HeaderComponent = styled.header`
  color: ${wine};
  width: 100%;
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  padding-left: 15px;
`;

export { HeaderComponent };
