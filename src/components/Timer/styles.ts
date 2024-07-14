import styled from "styled-components";
import { wine } from "../../styles/variables";

const TimerComponent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .Timer_container {
    display: flex;
    p {
      background-color: #fff5ee;
      height: 50px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      background-color: ${wine};
      color: #fff5ee;
      height: 50px;
      width: 100px;
      border: none;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
  span {
    max-width: 300px;
    text-align: center;
  }
`;

export { TimerComponent };
