import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  max-width: 70rem;
  margin: 2rem 0;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main``;
