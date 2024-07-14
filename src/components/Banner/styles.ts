import styled from "styled-components";
import { wine } from "../../styles/variables";

const BannerComponent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 1.5rem;
  }
  button {
    cursor: pointer;
    height: 50px;
    border: none;
    width: 100%;
    font-size: 1.3rem;
    color: ${wine};
  }
`;
export { BannerComponent };
