import styled from "styled-components";

const Container = styled.section`
  max-width: 550px;
  width: 100%;
  aspect-ratio: 1/1;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
`;

export { Container };
