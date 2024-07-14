import styled, { css } from "styled-components";
import { wine } from "../../styles/variables";

const HeaderComponent = styled.header`
  color: #fff5ee;
  width: 100%;
  background-color: ${wine};
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  font-size: 3rem;
  padding-left: 15px;
  ${css`
    @media screen and (max-width: 465px) {
      justify-content: center;
    }
  `}
`;

export { HeaderComponent };
