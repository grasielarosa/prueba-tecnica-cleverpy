import styled from "styled-components";
import { device } from "../../../styles/devicesSizes";

export const Grid = styled.div`
  max-width: 70rem;
  margin: 2rem 0;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;

  @media (${device.tablet}) {
    grid-template-columns: 1fr;
  }
`;
